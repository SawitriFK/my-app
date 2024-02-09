// import logo from './logo.svg';
import './App.css';
import CompanyProfile from './components/CompanyProfile';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { MyContextProvider } from './context';

function App() {

  const companyData = {
    name: "PT PT Indodev Niaga Internet",
    address: "Jl Tegal Roran Raya",
  }

  return (
    <MyContextProvider>
      <div className="App">
        {/* <CompanyProfile/> */}
        <Router>
          <Routes>
            < Route path="/" element={<HomeComponent />} />
            < Route path="/about" element={<AboutComponent />} />
            < Route path="/company" element={<CompanyProfile companyData={companyData} />} />
          </Routes>
        </Router>
      </div>
    </MyContextProvider>
  );
}

export default App;
