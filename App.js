import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ChartTwo from './ChartTwo';
import ChartThree from './ChartThree';
import ChartFour from './ChartFour';


function App() {


  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='ChartTwo' element={<ChartTwo />} />
      <Route path='ChartThree' element={<ChartThree />} />
      <Route path='ChartFour' element={<ChartFour />} />
    </Routes>

  );
}

export default App;
