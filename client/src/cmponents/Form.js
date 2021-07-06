import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
          <form onSubmit={this.prpos.updateItem}>
              <input onChange={this.props.strDrinkUpdate} type='text' value={this.props.strDrink}></input>
              <input type='submit'value='updating'></input>



          </form>
        )
    }
}

export default Form
