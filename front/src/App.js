import NavbarComponent from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <div style={{backgroundColor: 'black', height: '100%'}}>
      <NavbarComponent />
      <Home></Home>
    </div>
  );
}

export default App;
