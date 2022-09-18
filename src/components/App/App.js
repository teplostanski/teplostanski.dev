import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavMenu from '../NavMenu/NavMenu';
import About from '../../pages/About/About';
import Projects from '../../pages/Projects/Projects';
import PageToTop from '../../scrolls/PageToTop';

function Redirect({ redirectTo }) {
  return <Navigate to={redirectTo} />;
}

export default function App() {
  return (
    <div className="container">
      <NavMenu />
      <PageToTop />
      <Routes>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          element={<Redirect redirectTo="/about" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}
