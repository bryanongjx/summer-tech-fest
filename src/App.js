import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './Components/NavigationBar';
import {
  BrowserRouter,
  Routes,
  Route,
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
import Week2Leetcode from './Pages/Schedule/Week2/Week2Leetcode'
import Week3Leetcode from './Pages/Schedule/Week3/Week3Leetcode'
import Week4Leetcode from './Pages/Schedule/Week4/Week4Leetcode'
import Week5Leetcode from './Pages/Schedule/Week5/Week5Leetcode'
import Week6Leetcode from './Pages/Schedule/Week6/Week6Leetcode'
import Week7Leetcode from './Pages/Schedule/Week7/Week7Leetcode'
import Week8Leetcode from './Pages/Schedule/Week8/Week8Leetcode'
import Week9Leetcode from './Pages/Schedule/Week9/Week9Leetcode'
import Week10Leetcode from './Pages/Schedule/Week10/Week10Leetcode'
import GitHub from './Pages/resources/github';
import TechStack from './Pages/resources/techstack';


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
        <Route path = "/schedule/week2/leetcode" element = {<Week2Leetcode/>}></Route>
        <Route path = "/schedule/week3/leetcode" element = {<Week3Leetcode/>}></Route>
        <Route path = "/schedule/week4/leetcode" element = {<Week4Leetcode/>}></Route>
        <Route path = "/schedule/week5/leetcode" element = {<Week5Leetcode/>}></Route>
        <Route path = "/schedule/week6/leetcode" element = {<Week6Leetcode/>}></Route>
        <Route path = "/schedule/week7/leetcode" element = {<Week7Leetcode/>}></Route>
        <Route path = "/schedule/week8/leetcode" element = {<Week8Leetcode/>}></Route>
        <Route path = "/schedule/week9/leetcode" element = {<Week9Leetcode/>}></Route>
        <Route path = "/schedule/week10/leetcode" element = {<Week10Leetcode/>}></Route>
        <Route path = "/resources/github" element = {<GitHub/>}></Route>
        <Route path = "/resources/techstack" element = {<TechStack/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
