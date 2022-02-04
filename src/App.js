import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import City from "./components/City";
import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
