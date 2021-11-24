import React from 'react';
import { Background } from './images/imports-exports/images';
import Panel from './components/panel/Panel';
import Menu from './components/menu/Menu';
import { useAppSelector, useAppDispatch } from './components/hooks/ReduxHooks';
import { closeMenuAction } from './store/actions/menuAction';
function App () {
  const {open} = useAppSelector(state => state.menu);
  
  return (
    <div className="app" style={{backgroundImage: `url(${Background.Background_7})`}} >
        <Panel />
        { open? <Menu />: null}
        
    </div>
  );
}

export default App;
