import './App.css';
import CenterPart from './components/CenterPart';
import ChatSection from './components/ChatSection';
import LeftPanel from './components/LeftPanel';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <>
    <Navbar style={{position:'fixed', display:'flex'}} />
    <div className='layout' >
    <LeftPanel />
    <CenterPart />
    <ChatSection />
    </div>
    </>
    
  );
}

export default App;
