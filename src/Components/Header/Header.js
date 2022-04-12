import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {
    //header er modde dekaite cassi tai user ke
    const{user,handlesignOut}=useFirebase();
    return (
        <div className='header'>
             <nav>
             <Link to="/">Home</Link>

           
             <Link to="/products">products</Link>
             <Link to="/order">order</Link>
             <Link to="/register">Registar</Link>
             <span>{user?.displayName && user.displayName}</span>
             {    user?.uid  ?
                 <button onClick={handlesignOut}>sign out</button>
                 :
                 <Link to="/login">Login</Link>
            }
             </nav>
        </div>
    );
};

export default Header;