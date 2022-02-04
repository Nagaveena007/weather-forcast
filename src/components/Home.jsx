import City from "./City";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InititalStates } from "../redux/store";
import MapComponent from "../components/MapComponent";
import { cityReducer } from "../redux/reducers/cityReducer";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  const cityWeather = useSelector((state) => state.city.data);

  useEffect(() => {}, [cityWeather.data]);
  return (
    <>
      <Container className="mt-5 ">
        <Row>
          <Col md={6} className=" ">
            <City />
          </Col>
          <Col md={6} className="mt-5 pt-2">
            <MapComponent />
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
