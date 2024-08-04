import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Home, Layout } from "./components/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
