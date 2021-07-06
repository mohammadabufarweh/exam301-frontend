import React, { Component } from 'react'

export class ApiCrudData extends Component {
    render() {
        return (
        this.props.apiCrudData.map((idx, obj)=>{
            return(
                <div key={idx}>
                <h1>{obj.strDrink}</h1>
                <img src={obj.strDrinkThumb} alt='' />
               
                <button onClick={this.props.delteItem(obj.slug)}> Delete </button>
                        <button onClick={e=>this.props.showUpdateForm(obj.strDrink,obj.slug)}> Show update form </button>
            </div>
            )
        })
        )
    }
}

export default ApiCrudData
