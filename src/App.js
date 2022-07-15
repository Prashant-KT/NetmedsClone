import './App.css';
import { AllRoutes } from './Pages/AllRoutes/AllRoutes';
import {Footer} from './Pages/Footer/Footer'
import { Navbar } from './Pages/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
