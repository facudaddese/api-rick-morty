import { CharacterProvider } from './components/characterProvider/CharacterProvider'
import MainLayoutContainer from './components/mainLayoutContainer/MainLayoutContainer'
import Header from './components/header/Header'
import Episode from "./components/episode/Episode"
import Location from "./components/location/Location"
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <CharacterProvider>
      <div className="grid grid-container min-h-screen">
        <Header />
        <main className="[grid-area:main] px-2">
          <Routes>
            <Route path="/" element={<MainLayoutContainer />} />
            <Route path="/episode" element={<Episode />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
      </div>
    </CharacterProvider>
  )
}

export default App
