import React, { Component } from 'react'
import axios from 'axios'
import ApiCrudData from './ApiCrudData'
import Form from './Form'
import { throws } from 'assert'
export class Fav extends Component {
    constructor(props){
        super(props)
        this.state={
            // url:this.state.REACR_URL,
            apiCrudData:[],
            showApiCrudData:false,
            strDrink:'',
            slugName:'',
            showform:false
        }
        
    }

    componentDidMount=async()=>{
        const getCrudApiDataFromApi=await axios.get(`http://localhost:3030/juice/fav`)
        this.setState({
            apiCrudData:getCrudApiDataFromApi.data,
            showApiCrudData:true
        })
    }

    delteItem=async(slug)=>{
        const deleteCrudApiDataFromApi=await axios.delete(`http://localhost:3030/juice/fav0${slug}`)

        this.setState({
            apiCrudData:deleteCrudApiDataFromApi.data
        })
    }
    showUpdateForm=async(str,slug)=>{
        this.setState({
            strDrink:str,
            slugName:slug,
            showform:true
        })
    }
    
    strDrinkUpdate=(e)=> this.setState({strDrink:e.target.value})


    updateItem=async(e)=>{
        e.preventDefault();
        const updateCrudApiDataFromApi=await (axios.put(`http://localhost:3030/juice/fav0${this.state.slugName}`),{strDrink: this.state.strDrink})
        this.setState({
            apiCrudData:updateCrudApiDataFromApi.data,
           
        })
    }

    render() {
        return (
            <>
            {this.state.showform &&
            <Form
            strDrinkUpdate={this.strDrinkUpdate}
            updateItem={this.updateItem}
            strDrink={this.state.strDrink}
            />

            }
            

            {this.state.showApiCrudData &&
            <ApiCrudData
            apiCrudData={this.state.apiCrudData}
            delteItem={this.delteItem}
            showUpdateForm={this.showUpdateForm}
            />
          }
          </>
        )
    }
}

export default Fav
