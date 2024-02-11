import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import CountriesListingPage from './pages/CountriesListingPage';
import CountryDetailPage from './pages/CountryDetailPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<CountriesListingPage />} />
          <Route path="/country/:name" element={<CountryDetailPage />} />
        </Routes>
        <></>
      </div>
    </Router>
  );
}

export default App;
