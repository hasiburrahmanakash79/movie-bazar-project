import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import SideCart from './components/SideCart/SideCart'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className="body-container d-flex mt-5 px-4">
        <div className="main-content col-md-8 pe-5">
          <Main></Main>
        </div>
        <div className="sideCard col-md-4 ">
          <SideCart></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
