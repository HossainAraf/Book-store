import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Books from './components/Books';
import Categories from './components/Categories';
// import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <Nav />
      <Books />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </Router>
  );
}

export default App;
