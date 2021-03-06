import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () =>{
return(
    <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/'>LogOut</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating red lighten-2'>RR</NavLink></li>
    </ul>
)
}
export default SignedInLinks