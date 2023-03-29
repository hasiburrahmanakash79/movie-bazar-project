import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SideCart from './components/SideCart/SideCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [watchTime, setWatchTime] = useState("")
  const handleWatchTime = (Time) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem("Watch Time"));
    if(previousWatchTime){
      const addTime = previousWatchTime + Time;
      localStorage.setItem("Watch Time", addTime)
      setWatchTime(addTime)
    }
    else{
      localStorage.setItem("Watch Time", Time)
      setWatchTime(Time)
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="body-container d-md-flex px-4">
        <div className="main-content col-md-8 pe-md-5 pb-3">
          <Main handleWatchTime={handleWatchTime}></Main>
        </div>
        <div className="sideCard  col-md-4">
          <SideCart watchTime={watchTime}></SideCart>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  )
}

export default App
