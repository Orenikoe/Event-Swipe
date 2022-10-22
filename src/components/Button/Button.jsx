import React, { useState } from 'react'
// import { Button } from 'grommet'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import './Button.css'

const NavButton = (props) => {
  const [state,setState] = useState(true)
  return (
    // <button className='btn'>{props.data.title}</button>
    <>
    <Button label={props.data.title}/>
    <Dialog visible={state} onHide={() => setState(false)}>
    {/* // content */}
</Dialog>
    </>
  )
}

export default NavButton