import React, { useState } from 'react'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'
import {selectCar}from '../features/car/carSlice'
import {useSelector} from 'react-redux'

 
const Container = styled.div`
background-color: rgba(222, 225, 227, 0.4);
border-radius: 2px 2px 2px rgb(0, 0, 0);
width:100vw;
position:fixed;
padding:10px 40px;
display: flex;
  align-items: center;
  justify-content: space-between;
top:0;
left:0;
z-index:1;

`
const Menu = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
  
  p{
    text-transform:capitalize;
    font-weight:600;
    font-size:15px;
    padding: 0.4rem 0.5rem;
    transition: linear 0.5s;
  }
  p:hover{
    background-color: rgba(174, 174, 174, 0.53);
  border-radius:5px; 
}
  @media (max-width:768px) {
  display:none;
}

`
const RightMenu = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
  
  p{
    text-transform:capitalize;
    font-weight:600;
    font-size:15px;
    padding: 0.4rem 0.5rem;
    transition: linear 0.5s;
  }
  p:hover{
    
    background-color: rgba(174, 174, 174, 0.53);
      border-radius:5px; 
}
@media (max-width:768px) {
  gap:1rem;
}
`
const BurgerNav = styled.ul`
position:fixed;
top:0;
right:0;
bottom:0;
list-style: none;
background-color: white;
width:16.5rem;
padding:2rem;

display:flex;
flex-direction:column;
align-items:center;
gap:0.5rem;
text-transform:capitalize;
cursor:pointer;
li{
  padding: 0.4rem 0.5rem;
  width:13rem;
}
a{
  font-weight:500;
  font-size:14px;
}
li:hover{
  background-color:rgba(222, 220, 220, 0.493);
  border-radius:5px; 
}
.icon{
  margin-left: 11rem;
  margin-bottom: 1.5rem;
}

${'' /* showing sidebar */}
transform:${props=>props.show? "translateX(0)":"translateX(100%)"};
transition: linear 0.3s;

`


const Header = () => {
  const [burgerState , setBurgerState] = useState(false)
  const cars=useSelector(selectCar);

  const showBurgerNav =()=>{
    setBurgerState(true)
  }
  const hideBurgerNav =()=>{
    setBurgerState(false)
  }
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
      {cars && cars.map((car, index)=>{
         return <p key={index}><a href="#">{car}</a></p>
      })}
      </Menu>

      <RightMenu>
        <p><a href="#">shop</a></p>
        <p><a href="#">account</a></p>
        <p><a href="#" onClick={showBurgerNav} className='menu'>menu</a></p>

      </RightMenu>

      <BurgerNav show={burgerState}>
      <FontAwesomeIcon icon={faX} className='icon' onClick={hideBurgerNav}/>
      {cars && cars.map((car, index)=>{
         return <li key={index}><a href="#">{car}</a></li>
      })}
        <li><a href="#">existing inventory</a></li>
        <li><a href="#">used invntory</a></li>
        <li><a href="#">demo drive</a></li>
        <li><a href="#">insurance</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Account</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header