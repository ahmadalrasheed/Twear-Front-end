import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./pages/Homescreen";
import ProductScreen from "./pages/ProductScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-5">
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
