import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

// Fetch data from the API
const fetchPlayers = fetch('/players.json').then(res => res.json())

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
        <div className='flex justify-between items-center border border-amber-700'>
          <span>Available Players</span>
          <div className='flex gap-4 '>
            <button className='btn'>Available</button>
            <button className='btn'>Selected(0)</button>
          </div>
        </div>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers fetchPlayers={fetchPlayers}></AvailablePlayers>
        </Suspense>
        <SelectedPlayers></SelectedPlayers>
      </div>

    </>
  )
}

export default App
