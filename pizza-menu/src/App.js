import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Menus from './components/layout/Menus';

function App() {
  return (
   <div className = "container">
    <Header/>
    {/* router */}
    <Menus/>
    <Footer/>
   </div>
  );
};

export default App;
