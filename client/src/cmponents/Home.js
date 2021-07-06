import axios from 'axios'
import React, { Component } from 'react'
import ApiData from './ApiData'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            // url:this.state.REACR_URL,
            apiData:[],
            showApiData:false
        }
        
    }
    favouritItem=async(favData)=>{
        await axios.post(`http://localhost:3030/juice/fav`,favData)
    }
    componentDidMount=async()=>{
        const getDataFromApi=await axios.get(`http://localhost:3030/juice`)
        this.setState({
            apiData:getDataFromApi.data,
            showApiData:true
        })
    }
    render() {
        return (
            <>
          {this.state.showApiData &&
          <ApiData
          apiData={this.state.apiData}
          favouritItem={this.favouritItem}

          />
        }
        </>
        )
    }
}

export default Home
