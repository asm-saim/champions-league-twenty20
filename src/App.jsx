import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { useState } from 'react'

// Fetch data from the API
const fetchPlayers = fetch('/players.json').then(res => res.json())

function App() {

  //state declaration for toggling:
  const [toggle, setToggle] = useState(true)

  // state declaration for calculation:
  const [balance, setAvailableBalance] = useState(100000000)
  return (
    <>
      <div className='mx-auto'>
        <Navbar balance={balance}></Navbar>
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-between items-center my-5'>
            <span className='font-bold text-xl'>Available Players</span>
            <div className='flex text-base'>
              <button onClick={() => setToggle(true)} className={`btn rounded-l-lg border-none font-bold text-base ${toggle === true ? "bg-orange-500 text-black" : "'' text-white"}`}>Available</button>
              <button onClick={() => setToggle(false)} className={`btn rounded-r-lg border-none font-bold text-base ${toggle === false ? "bg-orange-500 text-black" :
                "'' text-white"}`}>Selected(0)</button>
            </div>
          </div>
          {
            toggle === true ?
              <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}><AvailablePlayers balance={balance} setAvailableBalance={setAvailableBalance}
                fetchPlayers={fetchPlayers}></AvailablePlayers></Suspense> : <SelectedPlayers></SelectedPlayers>
          }

        </div>
      </div>

    </>
  )
}

export default App
