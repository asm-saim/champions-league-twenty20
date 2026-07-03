import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
        <AvailablePlayers></AvailablePlayers>
        <SelectedPlayers></SelectedPlayers>
      </div>

    </>
  )
}

export default App
