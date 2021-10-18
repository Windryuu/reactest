import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Galery from './components/pages/Galery';

import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/galery" component={Galery} />
        <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
