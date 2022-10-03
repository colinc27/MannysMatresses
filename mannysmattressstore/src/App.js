import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="d-flex justify-content-center text-center">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
