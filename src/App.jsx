import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SideCart from './components/SideCart/SideCart'

function App() {

  const handleWatchTime = (watchTime) =>{
    const previousWatchTime = JSON.parse(localStorage.getItem("Watch Time"));
    if(previousWatchTime){
      const addTime = previousWatchTime + watchTime;
      localStorage.setItem("Watch Time", addTime)
    }
    else{
      localStorage.setItem("Watch Time", watchTime)
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="body-container d-md-flex px-4">
        <div className="main-content col-md-8 pe-md-5">
          <Main handleWatchTime={handleWatchTime}></Main>
        </div>
        <div className="sideCard col-md-4">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
