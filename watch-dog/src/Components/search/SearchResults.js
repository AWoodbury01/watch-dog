import React, { Component } from "react";
import Suggestions from "./Suggestions"

class SearchResults extends Component {
    render() {
        return (
                <Suggestions results={this.state.results} />
              

        )
    }
}

export default SearchResults

// {this.props.state.query === "" ? (
//     ""
//   ) : (
//     <Suggestions results={this.state.results} />
//   )}
