import React from 'react'
import { Link } from 'react-router-dom';
import '../style/main.scss'

const Nav = () => {
  return (
    <div className='nav'>
        <ul>
            <li><Link to='/' end>홈</Link></li>
            <li><Link to='/Top' >상의</Link></li>
            <li><Link to='/Bot' >하의</Link></li>
            <li><Link to='/sho' >신발</Link></li>
            <li><Link to='/ve' >장신구</Link></li>
        </ul>
    </div>
  )
}

export default Nav