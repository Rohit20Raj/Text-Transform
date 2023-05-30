import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'rgb(38, 35, 53)'
      document.body.style.color = 'white'
      document.title = 'Text Transfor - Dark'
      showAlert('Dark mode enabled', 'dark')
    } else {
      setTheme('light');
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'
      document.title = 'Text Transform - Light'
      showAlert('Light mode enabled', 'light')
    }
  }


  return (
    <>
      <Navbar title="TextTransform" theme={theme} toggleTheme={toggleTheme} />
      <Alert alert={alert} />
      {/* <About /> */}
      <TextForm showAlert={showAlert} theme={theme} />
    </>
  );
}

export default App;
