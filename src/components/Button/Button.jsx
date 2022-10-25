

import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import './Button.css'

const NavButton = (props) => {
  
  return (
    // <button className='btn'>{props.data.title}</button>
    <>
    <Button label={props.data.title}/>
 
    </>
  )
}

export default NavButton