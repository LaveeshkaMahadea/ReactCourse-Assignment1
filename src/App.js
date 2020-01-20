import React from 'react';
//import UserOutput and UserInput js files;
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';
//import useState hook
import { useState } from 'react';
import './App.css';
//import UserOutput css file
import './UserOutput/UserOutput.css'

const App = (props) => {

  //adding state for the username variable 
  const [ userState, setUserState] = useState(
    {
      username: 'GhostNymeria'
  }
  );

  //method to manipulate the state, an event-handler method
  const switchUsernameHandler = (event) => {
    setUserState(
      {
        username: event.target.value
      }
    );
  };

//inline stype for the input text element
const styleInputTextElement = {
 font: '15px arial, sans-serif',
 border: '1px solid blue',
 padding: '100px',
 margin: '100px'

};

  return (
    <div className="App">
     
    <UserOutput username={userState.username} />

    <UserOutput username="GhostNymeria"/>

    <UserInput style={styleInputTextElement} username={userState.username} changed={switchUsernameHandler}/>

    </div>
  );
}

export default App;
