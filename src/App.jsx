import Header from "./components/Header"
import PokeCard from "./components/PokeCard"
import SideNav from "./components/SideNav"
import { useState } from "react"


function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false) //this is opposite of what it should do (i.e. when its true its actually false solve this please)

  function handleToggleMenu(){
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu () {
    setShowSideMenu(false)
  }
  
  return (
    <>
     <Header handleToggleMenu={handleToggleMenu} />

     <SideNav selectedPokemon={selectedPokemon} 
       setSelectedPokemon={setSelectedPokemon} 
       handleToggleMenu={handleToggleMenu} 
       showSideMenu={showSideMenu}
       handleCloseMenu={handleCloseMenu}
      />

     <PokeCard selectedPokemon={selectedPokemon} />

    </>
  )
}

export default App
