import { CharacterProvider } from "./assets/components/characterProvider/CharacterProvider"
import MainLayoutContainer from "./assets/components/mainLayoutContainer/MainLayoutContainer"
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'
import './App.css'

function App() {

  return (
    <CharacterProvider>
      <div className="grid grid-container min-h-screen">
        <Header />
        <MainLayoutContainer />
        <Footer />
      </div>
    </CharacterProvider>
  )
}

export default App
