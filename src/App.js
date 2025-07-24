import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/CourseNav/NavBarNew';
import StatsComponent from './components/countup/CountUp';
import FirstScreen from './screens/FirstScreen';
import GlassCounterRow from './components/countup/CountUp';
import racheli from "./images/רחלי תדמית ללא רקע.png"
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import NewFirstScreen from './screens/NewFirstScreen';
import Fit from './components/fit/WhoFits';
import Certificates from './components/recommends/Certificates';
import Shorts from './components/shorts/Shorts';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import FifthScreen from './screens/FifthScreen';
import SixthScreen from './screens/SixthScreen';
function App() {
  return <>
  <div style={{overflowX:"hidden"}}>
  <NavBarNew/>
  <NewFirstScreen/>
{/* <FirstScreen/> */}
<SecondScreen/>
<AboutMe/>
<Certificates/>
<Shorts/>
<ThirdScreen/>
<FifthScreen/>
<Fit/>
<SixthScreen/>
<ForthScreen/>

</div>
  </>
}

export default App;
