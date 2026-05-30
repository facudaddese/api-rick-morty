import { CharacterProvider } from "./assets/components/characterProvider/CharacterProvider"
import MainLayoutContainer from './assets/components/mainLayoutContainer/MainLayoutContainer'
import Header from './assets/components/header/Header'
import './App.css'

function App() {
  return (
    <CharacterProvider>
      <div className="grid grid-container overflow-hidden min-h-screen justify-center">
        <Header />
        <MainLayoutContainer />
      </div>
    </CharacterProvider>
  )
}

export default App
