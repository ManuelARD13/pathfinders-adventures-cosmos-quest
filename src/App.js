import React from 'react';
import { SelectorsCtx } from './context/SelectorsCtx';
import { AppUI } from './components/AppUI/AppUI.js';


function App(){
  return(
    <SelectorsCtx>
      <AppUI />
    </SelectorsCtx>
  )
}

export { App }