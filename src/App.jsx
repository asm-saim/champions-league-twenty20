import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


// Fetch data from the API
const fetchPlayers = fetch('/players.json').then(res => res.json())

function App() {

  //state declaration for toggling:
  const [toggle, setToggle] = useState(true)

  // state declaration for calculation:
  const [balance, setAvailableBalance] = useState(100000000)

  // state declaration for selected section:
  const [purchasedPlayer, setPurchasedPlayer] = useState([])
  // console.log("hello", purchasedPlayer)

  //declare function for remove selected card:

  const removeCart = (remove) => {
    const filteredAfterRemove =
      purchasedPlayer.filter(leftPlayer => leftPlayer.playerName !== remove.playerName)
    setPurchasedPlayer(filteredAfterRemove)
    setAvailableBalance(balance + parseInt(remove.price.split('USD').join("").split(',').join("")))
  }
  return (
    <>
      <div className='mx-auto'>
        <Navbar balance={balance}></Navbar>
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-between items-center my-5 mx-5 md:mx-0'>
            <span className='font-bold text-sm md:text-xl'>
              {toggle === true ? "Available Players" :
                `Selected Players(${purchasedPlayer.length}/6)`}</span>
            <div className='flex text-base'>
              <button onClick={() => setToggle(true)} className={`btn rounded-l-lg border-none font-bold text-base ${toggle === true ? "bg-orange-500 text-black" : "'' text-white"}`}>Available</button>
              <button onClick={() => setToggle(false)} className={`btn rounded-r-lg border-none font-bold text-base ${toggle === false ? "bg-orange-500 text-black" :
                "'' text-white"}`}>Selected({purchasedPlayer.length})</button>
            </div>
          </div>
          {
            toggle === true ?
              <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}><AvailablePlayers fetchPlayers={fetchPlayers}
                purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}
                balance={balance} setAvailableBalance={setAvailableBalance}
              ></AvailablePlayers></Suspense> : <SelectedPlayers
                purchasedPlayer={purchasedPlayer} removeCart={removeCart}></SelectedPlayers>
          }

          <ToastContainer position="top-center" autoClose={3000} />

        </div>
      </div>

    </>
  )
}

export default App
