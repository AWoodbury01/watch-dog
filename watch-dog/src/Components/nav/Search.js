import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import ContentManager from "../../modules/ContentManager"
import Suggestions from "./Suggestions"

class Search extends Component {
 state = {
   query: '',
   results: []
 }

 displaySearchResults = () => {
     ContentManager.getAllSearch().then ((searchContent) => {
        this.setState({
          results: searchContent.data
        })
      })
  
 }

 handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

 
//  handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     }, () => {
//       if (this.state.query && this.state.query.length > 1) {
//         if (this.state.query.length % 2 === 0) {
//           this.getInfo()
//         }
//       } 
//     })
//   }

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