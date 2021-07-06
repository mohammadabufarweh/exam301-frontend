import React, { Component } from 'react'

export class ApiData extends Component {
    render() {
        return (
            this.props.apiData.map((idx, obj) => {
                return (
                    <div key={idx}>
                        <h1>{obj.strDrink}</h1>
                        <img src={obj.strDrinkThumb} alt='' />
                        <button onChange={this.props.favouritItem(obj)}> favorit </button>

                    </div>
                )
            })
        )
    }
}

export default ApiData
