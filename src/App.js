
import './App.css';
import Header from './components/Arrow';
import Intro from './components/other_part';
import AnimatedSection from './components/1st_part';
import ProgressBar from './ProgressBar';

function App() {
  return (
    <div className="container">
      <ProgressBar />
      <Header/>
      
    <AnimatedSection/>
    <Intro/>
    </div>
  );
}

export default App;
