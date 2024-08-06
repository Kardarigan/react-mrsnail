import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Layout, Policy } from "./components/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
