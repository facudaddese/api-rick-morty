import { CharacterProvider } from "./assets/components/characterProvider/CharacterProvider"
import MainLayoutContainer from './assets/components/mainLayoutContainer/MainLayoutContainer'
import Header from './assets/components/header/Header'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Episode from "./assets/components/episode/Episode"
import Location from "./assets/components/location/Location"

function App() {
  return (
    <CharacterProvider>
      <div className="grid grid-container min-h-screen overflow-hidden">
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
