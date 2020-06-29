import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {this.props.movie.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions