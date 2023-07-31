import WeatherMainCard from "./weather.js";
import WeatherSideCards from "./fiveDaysWeather.js";
import TableData from "./otherData.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ContainerFunction({ data, list, state, error }) {
  if (state && !error) {
    return (
      <main>
        <Container className="shadow-lg rounded-3 bg-secondary border border-success-subtle myContainer">
          <Row className="py-2">
            <Col xs sm="3">
              <WeatherMainCard data={data} />
            </Col>
            <Col>
              <Row>
                <Col className="g-1">
                  <TableData data={data} />
                </Col>
              </Row>
              <Row>
                <Col className="g-2">
                  <WeatherSideCards list={list} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    );
  } else if (error) {
    return (
      <Container className="alert alert-primary bg-secondary shadow-lg rounded-3 border border-success-subtle myContainer">
        <p className="text-white m-5 p-5 d-flex justify-content-center h5">
          No results. Try again
        </p>
      </Container>
    );
  }
}
