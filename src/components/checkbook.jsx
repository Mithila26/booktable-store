import React, { Component } from 'react';
import  { useState, useEffect } from "react";
import axios from 'axios';



// //const APPURL='https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store';
// // const APPURL='https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store';

// const APPURL='https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store';


// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const APPURL = 'https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store';


// var cors = require('cors');

// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": 'GET,POST,HEAD,OPTIONS,PUT',
//       "Access-Control-Allow-Headers": 'Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers',
//       "Access-Control-Allow-Credentials": "true"
//     }
//   };

const config = {
  headers: {
    "Authorization": "eyJraWQiOiI0QlwvcGt0d1lpXC9OYWppcWZqTWRmMDFFeTlaMU5xanJJNXNUMmJhS2ttcDQ9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiTHVGWGZoTGtkV29pNmtNY3Rjck8xdyIsInN1YiI6ImM0NDgwNDg4LTIwNTEtNzA0Zi0wMjc1LTdmYjQ4ZGQ1ODQ4ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9UYmxNY3JESGkiLCJjb2duaXRvOnVzZXJuYW1lIjoibWl0aGlsYSIsImF1ZCI6IjMxc29vYmtvZXY2cTJkaXBtY2kxMXNraDByIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTEzODM3ODAsImV4cCI6MTY5MTM4NzM4MCwiaWF0IjoxNjkxMzgzNzgwLCJqdGkiOiI3ZTMzMTVhNi04N2RkLTRmMmItYWIxYi1hNmE2YzhiYzhkYjkiLCJlbWFpbCI6Im1pdGhpbGEucHJhYmh1QGxudGluZm90ZWNoLmNvbSJ9.mEBDZRk4MqnnXopTNen0wYu3NuGz9ieLQBLiylZoHYygulV0xBTjiwmDd1v1XeAcRi0idwa27QLmUKLoYdUJk_kEuAp6rHjwki1F2JUN7Wsgt4flYSH84uiZwAYHSSWyzkc14Q1k4Y2liapY2pBHibjN2latrkcCFIpogJWZsgX3MJ1VXhfte8VBCxA7HEIsH0UNGK0y2-dOoYWOoVdQSYdDZwTkKp2LK4lMZ-Dp3F5IgBhaq1OktGC1iTH1gPUKYUrFJFdc_ShysrY1fwcTAsGT-XchtZUqFaTsXlojbqLwuZYVAtKGR68GI_FI5lFuk-Qz7FNupZXFN37YEgHlIQ"
  }
};


export default class Form extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      id:Number(),
      name: '',
      Genre: '',
      Publisher: '',
      author:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.state.id =parseInt(this.state.id);
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
    const { id,name, Genre,Publisher, author} = this.state;
    
    await axios.post(
      APPURL,
         {
        id,
        name,
        Genre,
        Publisher,
        author
      }
       ,config
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
        
        <input 
            type="number" 
            id="id"
            name='id'
            value={parseInt(this.state.id)}
            onChange={this.handleChange}
            
            // parse={value => parseInt(value, 10)}
              />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Name: </label>
        <input type="text" name="name"
            onChange={this.handleChange}
            value={this.state.name}  />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Author: </label>
        <input type="text" author="author"
        name= 'author'
            onChange={this.handleChange}
            value={this.state.author}  />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Genre: </label>
        <input type="text" genre="Genre"
        name = 'Genre'
            onChange={this.handleChange}
            value={this.state.Genre}  />
      </div>
      <div style={{ padding: '10px' }}>
        <label>Publisher: </label>
        <input type="text" publisher="Publisher"
        name ='Publisher'
            onChange={this.handleChange}
            value={this.state.Publisher}  />
      </div>

          

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}


// import React, { Component } from 'react';
// import axios from 'axios';

// const APPURL = 'https://cors-anywhere.herokuapp.com/https://d0w4bo34hd.execute-api.us-east-1.amazonaws.com/dev/store';

// export default class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: '',
//       nameVar: '',
//       genre: '',
//       publisher: '',
//       author: ''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const inputValue = event.target.value;
//     const stateField = event.target.name;
//     this.setState({
//       [stateField]: inputValue,
//     });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const { id, nameVar, genre, publisher, author } = this.state;

//     try {
//       const response = await axios.post(APPURL, {
//         id,
//         nameVar,
//         genre,
//         publisher,
//         author,
//       });

//       console.log(response.data); // The response data from the API
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

  
//     render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} style={{ textAlign: 'center', fontSize: '20px', marginTop: '20px' }}>
//         <div style={{ padding: '10px' }}>
//         <label>ID: </label>
        
//         <input 
//             type="number" 
//             id="id"
//             name='id'

//             onChange={this.handleChange}
//             value={this.state.id}
//               />
//       </div>
//       <div style={{ padding: '10px' }}>
//         <label>Name: </label>
//         <input type="text" name="nameVar"
//             onChange={this.handleChange}
//             value={this.state.nameVar}  />
//       </div>
//       <div style={{ padding: '10px' }}>
//         <label>Author: </label>
//         <input type="text" author="author"
//         name= 'author'
//             onChange={this.handleChange}
//             value={this.state.author}  />
//       </div>
//       <div style={{ padding: '10px' }}>
//         <label>Genre: </label>
//         <input type="text" genre="genre"
//         name = 'genre'
//             onChange={this.handleChange}
//             value={this.state.genre}  />
//       </div>
//       <div style={{ padding: '10px' }}>
//         <label>Publisher: </label>
//         <input type="text" publisher="publisher"
//         name ='publisher'
//             onChange={this.handleChange}
//             value={this.state.publisher}  />
//       </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     );
//   }
// }
