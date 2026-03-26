
import { Suspense } from 'react'
import './App.css'
import Navbar from './component/Navebar/Navbar'
import PlayerCard from './component/Player/PlayerCard'



const loadPlayer = async() => {
  const res = await fetch("/PlayerData.json");
  return res.json();
}



function App() {

  const playerPromise = loadPlayer()
  
  
  return (
    <>
    
    <header className="max-w-400 mx-auto px-4">
     <Navbar></Navbar>
   </header>

   <main className="max-w-400 mx-auto px-4">
     
    <Suspense fallback={'Data is loading...'}>
      <PlayerCard playerPromise={playerPromise} > </PlayerCard>
    </Suspense>

   </main>

      
    </>
  )
}

export default App
