
import './App.css'
import { Outlet } from 'react-router'
import Navbar from "./components/Navbar"
function App() {


  return (
    <>
      <Navbar/>
      <main className='min-h-screen max-w-7xl mx-auto px-4 py-6  font-primary '>
      <Outlet/>
      </main>
      <h1>footer</h1>
    </>
  )
}

export default App
