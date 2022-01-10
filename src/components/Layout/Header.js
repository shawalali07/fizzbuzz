import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return( 
       <>
       <header className={classes.header}>
           <h1>RoadHouse Grill</h1>
           <HeaderCartButton onClick={props.onShowCart}/>
           </header>
           <div className={classes['main-image']}>
               <img src={mealsImage} alt='delicious food !' />
           </div>
       
       </>
    )
}

export default Header
