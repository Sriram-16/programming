import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Body from './components/body';
import Footer from './components/footer';
import Home from './components/home';
function App() {
  return (
    <div className="App" class="bg-dark">
      <Navbar />
      <Header />
      <div className='row'>
        <div className='col-lg-3'>
        <Sidebar />
        </div>
        <div className='col-lg-9'>
        <Home />
        </div>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;