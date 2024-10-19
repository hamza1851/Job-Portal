import { useState } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"

function App() {
  return (
    <>
      <Navbar />
      <Hero title="Find the React job that fits your skills and needs" />
      <HomeCards />
    </>
  )
}

export default App
