import './App.css';
import {  useState } from 'react';
import GUN from 'gun';
import 'gun/sea';
import 'axe.js'

// Global State Username
const [username, setUsername] = useState('')


// Code for GUN.js, user auth
export const db = GUN();

export const user = db.user().recall({sessionStorage: true});

user.get('alias').on((v) => setUsername(v))

db.on('auth', async(event) => {

})

function App() {

  return (
    <div className="App">

    </div>
  );
}

export default App;
