import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './components/AddRegistration'
import SearchRegistration from './components/SearchRegistration'
import DeleteRegistration from './components/DeleteRegistration'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddRegistration/>}/>
  <Route path='/' element={<SearchRegistration/>}/>
  <Route path='/' element={<DeleteRegistration/>}/>
  
</Routes>
</BrowserRouter>
</>
  )
}

export default App
