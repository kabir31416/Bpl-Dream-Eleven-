
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './component/Navebar/Navbar'
import PlayerCard from './component/Player/PlayerCard'



const loadPlayer = async() => {
  const res = await fetch("/PlayerData.json");
  return res.json();
}


function App() {

  const playerPromise = loadPlayer()
  
  const [coin, setCoin] = useState(500000)
  
  return (
    <>
    
    <header>
     <Navbar coin={coin}></Navbar>
   </header>

   <main>
     
    <Suspense fallback={'Data is loading...'}>
      <PlayerCard playerPromise={playerPromise} setCoin={setCoin} coin={coin} > </PlayerCard>
    </Suspense>

   </main>

      
    </>
  )
}

export default App
