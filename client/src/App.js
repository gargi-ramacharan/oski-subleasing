import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetail from './pages/ListingDetail';
import NewListing from './pages/NewListing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetail />} />
        <Route path="/new" element={<NewListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;