import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import List from './components/List/list';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
      <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
