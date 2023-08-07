import React, { Component } from 'react';
import  { useState, useEffect } from "react";
import axios from 'axios';
const APPURL='https://cors-anywhere.herokuapp.com/https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store';
//APPURL='https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store';

var cors = require('cors');


const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": true
    }
  };
  

export default class Form extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: '',
      genre: '',
      publisher: '',
      author:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  /*async handleSubmit(event) {
    event.preventDefault();
    const { id,name, genre,publisher, author} = this.state;
    
    await axios.post(
        APPURL,
      { key1: `${id}, ${name},${genre},${publisher},${author} ` }
    );
  }*/

  async handleSubmit(event) {
    event.preventDefault();
    const { id,name, genre,publisher, author} = this.state;
    
    await axios.post(
        APPURL,config
    );
  }   

  async getV(event){
  useEffect(() => {
    const getData = async () => {
    const response = await axios.get(APPURL)
    }
    getData();
  },[]
  );}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ textAlign: 'center', fontSize: '20px', marginTop: '20px' }}>
        <div style={{ padding: '10px' }}>
        <label>ID: </label>
        <input type="number" id="id"
            onChange={this.handleChange}
            value={this.state.id}  />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Name: </label>
        <input type="text" name="name"
            onChange={this.handleChange}
            value={this.state.id}  />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Author: </label>
        <input type="text" author="author"
            onChange={this.handleChange}
            value={this.state.author}  />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Genre: </label>
        <input type="text" genre="genre"
            onChange={this.handleChange}
            value={this.state.genre}  />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Publisher: </label>
        <input type="text" publisher="Publisher"
            onChange={this.handleChange}
            value={this.state.publisher}  />
      </div>

          

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}