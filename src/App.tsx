import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Body from './components/Body';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
      </Routes>
      <Body />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
