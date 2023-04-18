import './App.scss';
import { Menu } from '../blocks/menu';
import { About } from '../blocks/about';
import { Possibilities } from '../blocks/possibilities';
import { Partnership } from '../blocks/partnership';
import { Price } from '../blocks/price';
import { Contacts } from '../blocks/contacts';
import WOW from 'wowjs';

import 'animate.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    new WOW.WOW({
        live: false

      }).init();
}, [])

  return (
   <div className='App '>
        <div className="circles"></div>
        <Menu/>
        <About/>
        <Possibilities/>
        <Partnership/>
        <Price/>
        <Contacts/>
   </div>
  );
}

export default App;
