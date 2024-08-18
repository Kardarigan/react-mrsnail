import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Layout,
  Policy,
  All_Products,
  All_Blogs,
  Blog,
  Product,
} from "./components/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/product" element={<All_Products />} />
          <Route path="/product/:product" element={<Product />} />
          <Route path="/blog" element={<All_Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
