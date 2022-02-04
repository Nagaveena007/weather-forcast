import City from "./City";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Container className="mt-5 ">
        <Row>
          <Col md={6}>
            <City />
          </Col>
          <Col md={6} className="mt-5 pt-2">
            <img
              style={{ width: "32rem", height: "22rem" }}
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
              alt=""
              className="mb-3"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
/*API-KEY:===> AIzaSyDwlDHAEflfXFrObPhJlhTJAiH9JGQS5T8 */
