import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TableData({ data }) {
  return (
    <Container className="text-white rounded-3">
      <Row>
        <Col>Max/Min</Col>
        <Col className="d-flex justify-content-end">
          {Math.trunc(data.temp_max)}°C/{Math.trunc(data.temp_min)}°C
        </Col>
      </Row>
      <Row>
        <Col> Humidity</Col>
        <Col className="d-flex justify-content-end">{data.humidity}%</Col>
      </Row>
      <Row>
        <Col className="">Wind</Col>
        <Col className="d-flex justify-content-end">{data.wind}</Col>
      </Row>
      <Row>
        <Col className="">Pressure</Col>
        <Col className="d-flex justify-content-end">{data.pressure}</Col>
      </Row>
    </Container>
  );
}
