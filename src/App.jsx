import { React, useState } from 'react';
import Dash from './component/Dash/Dash';
import Nav from './component/Nav/Nav';
import './style/font.css';
import { GlobalStyle } from './style/utility.style';

// eslint-disable-next-line func-names
const App = function () {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav setOpen={setOpen} />
      <Dash open={open} setOpen={setOpen} />
    </div>
  );
};

export default App;
