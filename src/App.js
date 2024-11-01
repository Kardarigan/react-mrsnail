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
  Rule,
  Snail,
  Ex_Category,
  Search_Results,
} from "./components/Portal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/درباره" element={<About />} />
          <Route path="/تماس با ما" element={<Contact />} />
          <Route path="/قوانین" element={<Policy />} />
          <Route path="/قوانین/:rule" element={<Rule />} />
          <Route path="/محصولات" element={<All_Products />} />
          <Route path="/محصولات/:product" element={<Product />} />
          <Route path="/مقالات" element={<All_Blogs />} />
          <Route path="/مقالات/:blog" element={<Blog />} />
          <Route path="/مرکز حلزون" element={<Snail />} />
          <Route path="/:category" element={<Ex_Category />} />
          <Route path="/جستجو" element={<Search_Results />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
