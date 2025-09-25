
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Countcard from './Components/Countcard'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {
const [tickets, setTickets]= useState([]);
const[selectedTicket, setSelectedTicket]=useState([])
const[resolvedTickets, setResolvedTickets]= useState([])
 

useEffect(()=>{
  fetch("/data.json").then((res)=> res.json()).then((data)=>setTickets(data))
  .catch((err) => console.error("Error loading data:", err));
}, [])

 const handleSelectTicket = (ticket) => {
   if (
    !selectedTicket.some((t) => t.id === ticket.id) &&
    !resolvedTickets.some((t) => t.id === ticket.id)
  ) {
    setSelectedTicket((prev) => [...prev, ticket]);
  }
  };

const handleComplete = (ticket) => {
  setResolvedTickets((prev) => [...prev, ticket]); 
   setSelectedTicket((prev) => prev.filter((t) => t.id !== ticket.id));
 
  };

  return (
    <>

  <Navbar></Navbar>

<Countcard inProgress={tickets.filter(t => !resolvedTickets.some(r => r.id === t.id))}
  resolved={resolvedTickets}></Countcard>

<div className=' flex justify-between'>

<Suspense fallback={<p> loading all elements......</p>}>
  <Card tickets={tickets} onCardClick={handleSelectTicket} resolvedTickets={resolvedTickets}> </Card>
</Suspense>

<Sidebar selectedTicket={selectedTicket} onComplete={handleComplete} resolvedTickets={resolvedTickets}>
</Sidebar>

</div>
  <Footer></Footer>
    </>
  )
}

export default App
