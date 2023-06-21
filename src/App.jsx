import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link  ,Routes} from 'react-router-dom';
import HomePage from './Routes/HomePage';
import Balance from './Routes/Balance';


const ZeroSum = ({addNum,subNum}) => {

  return (
    <div>
      <h1>ZeroSum</h1>
      <button onClick={addNum}>Add</button>
      <button onClick={subNum}>Subtract</button>
    </div>
  );

}

const App = () => {
  
  return(
    <div className='container'>
    <Router>
    <div>
      <nav>
      <ul>
        <li>
          <Link to="/">
          <h1>Home</h1>
          </Link>
          
        </li>
        <li>
          <Link to="/balance">
          <h1>Balance</h1>
          </Link>
          </li>
      
      </ul>
      </nav>
    </div>

    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/balance" element={<Balance/>}/>


    </Routes>
    </Router>
    </div>
  )
}





export default App;