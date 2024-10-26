import { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber }  from '../utils'

export default function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleToggleMenu, showSideMenu,handleCloseMenu } = props
    const [searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((val, valIndex) => {
        // if full pokedex number includes the current input (search) value the return true
        if ((getFullPokedexNumber(valIndex)).includes(searchValue)) {return true}

        // if pokemon name is in input value  the also return true
        if (val.toLowerCase().includes(searchValue.toLowerCase())) {return true}

        // otherwise exclude from the array
       return false
    })
    return (
        <nav className={' ' + (showSideMenu ? " open" : '')}>
        {/*//try template literals in class name*/}
            <div className={"header " + (showSideMenu ? "open" : '')}>
                <button className='open-nav-button' onClick={handleCloseMenu}>
                <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className='text-gradient'>Pokédeckz</h1>
            </div>
            <input placeholder='E.g. 001 or Bulbasaur' type="text" value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} />
            {
                filteredPokemon.map((pokemon, pokemonIndex)=>{
                    const truePokedexNumber = first151Pokemon.indexOf(pokemon)
                    return(
                        <button key={pokemonIndex} className={'nav-card ' + (pokemonIndex === selectedPokemon ? 'nav-card-selected' : '')} onClick={() => {
                            setSelectedPokemon(truePokedexNumber)
                            handleCloseMenu()
                        }}>
                            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                            <p>{pokemon}</p>
                        </button>
                    )
                    
                })
            }
        </nav>
    )   
}