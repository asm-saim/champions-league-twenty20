import './App.css'
import navImg from './assets/logo.png'
import coin from './assets/dollar.png'

function App() {

  return (
    <>
      <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
          <a class="">
            <img className='w-15 h-15' src={navImg} alt="" />
          </a>
        </div>
        <div class="flex items-center gap-3 ">
          <span>600000000 Coin</span>
          <span><img className='w-7 h-7' src={coin} alt="" /></span>
        </div>
      </div>
    </>
  )
}

export default App
