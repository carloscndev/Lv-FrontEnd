// Import Modules
import React from 'react'

// Import Components
import Logo from '../../icons/Logo'

// Import styles
import './styles.scss'

const Header = () => (
  <header>
    <div className='container'>
      <div className='header-wrapper'>
        <div className='logo-container'>
          <Logo />
        </div>
        <input placeholder='Buscar...' />
        <div className='header-menu'>
          <span>Mis pedidos</span>
          <span>Iniciar sesión</span>
          <span>Bolsa</span>
        </div>
      </div>
    </div>
  </header>
)

export default Header
