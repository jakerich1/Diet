import { React } from 'react';
import Dash from './component/Dash/Dash';
import Nav from './component/Nav/Nav';
import './style/font.css';
import { GlobalStyle } from './style/utility.style';

// eslint-disable-next-line func-names
const App = function () {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Dash />
    </div>
  );
};

export default App;
