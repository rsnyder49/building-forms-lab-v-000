// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ''
  }

   handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

   handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        Band Input
      </div>
    )
  }
}

export default BandInput
