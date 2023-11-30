import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar' style={{
        display: 'flex',
        width: '100%',
        height: '4rem',
        position: 'fixed',
        zIndex: 100,
        background: 'rgb(118,190,231)',
        justifyContent: 'center',
        alignItems:'center',
        margin: 0,
        padding: 0, // Add this line to reset padding
      }}>
        <div className='logo' >SHIKSHAK</div>
    </div>
  )
}
