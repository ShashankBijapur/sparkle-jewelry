
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Products from './Components/Products';
import  Comments from './Components/Comments';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Body/>
      <Products/>
      <Comments/>
      <Footer/>
    </div>
  );
}

export default App;
