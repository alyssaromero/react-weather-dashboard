import React from 'react'
import search from '../images2/search-solid.png'

function Header() {
    return(
        <header className="site-header">
            <div className="site-search d-flex">
                 <form className="d-flex">
                     <input type="text" placeholder="search city, place, or zip..."></input>
                     <button className="search-button">
                         <img alt="search-button" src={search}></img>
                     </button>
                 </form>
             </div>
         </header>
    )
}

export default Header
