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

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers fetchPlayers={fetchPlayers}></AvailablePlayers>
        </Suspense>
        <SelectedPlayers></SelectedPlayers>
      </div>

    </>
  )
}

export default App
