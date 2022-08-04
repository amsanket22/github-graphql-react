import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../../Pages/AboutUs';
import Contact from '../../Pages/Contact';
import Internal from '../../Pages/Internal';

export default function Main() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="solutions" element={<Internal />} />
      </Routes>
      <Footer />
    </div>
  );
}
