import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UpdateImg from "./updateImg.js";

export default function WeatherMainCard({ data }) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();

  if ("00" <= month <= "11") month = month + 1;
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  let today = String(new Date()).split(" ", 4);
  let copy = today[0];
  let today2 = String(new Date()).slice(4, 15);
  let newToday = copy.concat(", ", today2);

  function StartCapitalLetter(str) {
    return String(str).toUpperCase();
  }

  const regex = /\s\w/gi;
  const description = data.description.replace(regex, StartCapitalLetter);

  return (
    <Card classNane="rounded-3" text="white" bg="dark" border="success">
      <Row className="pt-2 px-2">
        <Col>
          <p className="h5">{Math.trunc(data.temp)}°C</p>
        </Col>
        <Col>
          <p className="d-flex justify-content-end">
            {data.city}, {data.country}
          </p>
        </Col>
      </Row>
      <UpdateImg icon={data.icon} />
      <p className="m-2 d-flex justify-content-center">
        {description.replace(/^\w/, StartCapitalLetter)}
      </p>
      <p className="m-3 d-flex justify-content-center">{newToday}</p>
    </Card>
  );
}
