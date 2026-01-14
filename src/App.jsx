import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drawer from './components/Drawer'

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);



  return (
    <>
      <div className="min-h-screen flex items-center justify-center font-sans">
        <button
          onClick={() => setDrawerOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-sans"
        >
          Open Menu
        </button>
      </div>

      {/* Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}

export default App
