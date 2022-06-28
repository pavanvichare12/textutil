import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }


  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
  <>
    <Navbar about="changed" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
        <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}/>
    </div>
  </>
  );
}

export default App;




