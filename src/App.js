import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home';
import Resources from './Pages/Resources';
import OverallSchedule from './Pages/Schedule/OverallSchedule';
import Week1Zoom from './Pages/Schedule/Week1/Week1Zoom'
import Week2Zoom from './Pages/Schedule/Week2/Week2Zoom'
import Week3Zoom from './Pages/Schedule/Week3/Week3Zoom'
import Week4Zoom from './Pages/Schedule/Week4/Week4Zoom'
import Week5Zoom from './Pages/Schedule/Week5/Week5Zoom'
import Week6Zoom from './Pages/Schedule/Week6/Week6Zoom'
import Week7Zoom from './Pages/Schedule/Week7/Week7Zoom'
import Week8Zoom from './Pages/Schedule/Week8/Week8Zoom'
import Week9Zoom from './Pages/Schedule/Week9/Week9Zoom'
import Week10Zoom from './Pages/Schedule/Week10/Week10Zoom'
import Week1Leetcode from './Pages/Schedule/Week1/Week1Leetcode'


function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <div style={{ paddingTop: '30px' }}>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/Resources" element = {<Resources/>}></Route>
        <Route path = "/schedule" element = {<OverallSchedule/>}></Route>
        <Route path = "/schedule/week1/zoom" element = {<Week1Zoom/>}></Route>
        <Route path = "/schedule/week2/zoom" element = {<Week2Zoom/>}></Route>
        <Route path = "/schedule/week3/zoom" element = {<Week3Zoom/>}></Route>
        <Route path = "/schedule/week4/zoom" element = {<Week4Zoom/>}></Route>
        <Route path = "/schedule/week5/zoom" element = {<Week5Zoom/>}></Route>
        <Route path = "/schedule/week6/zoom" element = {<Week6Zoom/>}></Route>
        <Route path = "/schedule/week7/zoom" element = {<Week7Zoom/>}></Route>
        <Route path = "/schedule/week8/zoom" element = {<Week8Zoom/>}></Route>
        <Route path = "/schedule/week9/zoom" element = {<Week9Zoom/>}></Route>
        <Route path = "/schedule/week10/zoom" element = {<Week10Zoom/>}></Route>
        <Route path = "/schedule/week1/leetcode" element = {<Week1Leetcode/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
