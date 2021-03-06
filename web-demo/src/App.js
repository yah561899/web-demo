import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import List from './components/List/list';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
