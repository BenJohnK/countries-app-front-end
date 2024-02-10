import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountriesListingPage from './pages/CountriesListingPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<CountriesListingPage />} />
        </Routes>
        <></>
      </div>
    </Router>
  );
}

export default App;
