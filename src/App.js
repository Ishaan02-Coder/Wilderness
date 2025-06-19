import './components/Section1.css';
import './components/Section2&3.css';
import './App.css';
import Arrow from './components/Arrow';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import { useOtherRefs } from "./components/CommonRefs";
function App() {
  const refs = useOtherRefs(); 
  return (

    <div className="container">
      <ProgressBar />
      <Header/>
      <Arrow/>

      <Section1 />
      <Section2 refs={refs}/>
      <Section3 refs={refs}/>
      
    

    </div>
  );
}

export default App;
