// Import Modules
import React from 'react'

// Import Components
import Header from '../presentacional/Header'
import Footer from '../presentacional/Footer'

const MainLayout = ({ children }) => (
  <div className='app'>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default MainLayout
