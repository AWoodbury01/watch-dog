import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import ContentManager from "../../modules/ContentManager"
import Suggestions from "./Suggestions"
import axios from 'axios'
import API_KEY from "../../APIKey";

class Search extends Component {
 state = {
   query: '',
   results: []
 }

//  getInfo = () =>{
//      axios.get(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com?api_key=${API_KEY}/lookup?term=${this.state.query}`)
//      .then(({data}) => {
//          this.setState({
//              results: data.data
//          })
//      })
//  }

 getInfo = () =>{
    axios.get(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${this.state.query}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": `${API_KEY}`,
        },
      })
    .then(({data}) => {
        this.setState({
            results: data.data
        })
    })
}


 displaySearchResults = () => {
     ContentManager.getAllSearch().then ((searchContent) => {
        this.setState({
          results: searchContent.data
        })
      })
  
 }

//  handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     })
//   }

 
 handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

 render() {
   return (
     <Form>
       <input
         placeholder="Search ..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <Suggestions
       results={this.state.results}
       />
     </Form>
   )
 }
}

export default Search