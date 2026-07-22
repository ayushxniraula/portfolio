import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import CaseStudy from "./components/Casestudy";
import './App.css'
import Contact from "./components/Contact";
import Approach from "./components/Approach";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Blog />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="case-study/:slug" element={<CaseStudy />} />
          <Route path="approach" element={<Approach />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}