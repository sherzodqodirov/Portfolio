import React from 'react';
import {Link} from "react-router-dom";
import search from '../../assets/searchicon.svg';
import logo from '../../assets/logo.svg';
import subtracticon from '../../assets/subtracticon.svg';
import usericon from '../../assets/usericon.svg';
import './navbar.scss';

const Navbar = () => {
    const handlsub = (e) => {
        e.preventDefault()
      const searchval=e.target.searchtext.value;
        alert(searchval)
        e.target.reset()
    }
    return (
        <nav className="navbar bg-white ">
            <div className="container-fluid px-4">
                <Link to={'/'} className="navbar-brand"><div className='navlogo'><img className={'w-100'} src={logo} alt='logo'/></div></Link>

                <form className=" formsearch d-flex  " onSubmit={handlsub}>
                    <input className="searchinp" name={'searchtext'} type="text" placeholder="Search..." />
                        <button className="btnsearch"  type="submit"><img src={search} alt="icon"/></button>
                </form>
                <div className="subuser d-flex">
                    <Link to={'/'}>
                        <div className="subtracticon me-2">
                            <img className={'w-100'} src={subtracticon} alt="icon"/>
                        </div>
                    </Link>
                    <Link to={'/'}>
                        <div className="usericon">
                            <img className={'w-100'} src={usericon} alt="icon"/>
                        </div>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;