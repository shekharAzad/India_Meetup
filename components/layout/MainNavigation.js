import Link from 'next/link';
import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { redirect } from 'next/navigation'


import classes from './MainNavigation.module.css';

 function MainNavigation() {
  // const { loginWithRedirect } = useAuth0();
  
  return (
    <header className={classes.header}>
      {/* <img src='\socialmedia\meetup-logo.jpg' alt='logo'/> */}
      <div className={classes.logo}>
        <img className='icons' src='\socialmedia\india-meetup-high.png' alt='logo' />
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            {/* <Link href='/new-meetup'>Add New Meetup</Link> */}
            <Link href='/login'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
