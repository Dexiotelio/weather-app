import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import UpdateImg from "./updateImg.js";

export default function WeatherSideCards({ list }) {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let date2 = new Date();
  date2.setHours(hour - 3);
  let hour2 = date2.getHours();

  if (hour < 10) hour = "0" + hour;
  if (hour2 < 10) hour2 = "0" + hour2;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  let theDayHour = hour + ":" + minute + ":" + second;
  let newTheDayHour = hour2 + ":" + minute + ":" + second;

  const hours = /\d\d:\d\d:\d\d/;

  let filterList = list.filter((elem) =>
    theDayHour > newTheDayHour
      ? theDayHour >= elem.date.match(hours) &&
        elem.date.match(hours) > newTheDayHour
      : theDayHour >= elem.date.match(hours)
  );

  function getDay(date) {
    let day = String(new Date(date)).slice(0, 3);

    return day;
  }

  return (
    <>
      <p className="text-white d-flex justify-content-center">
        The weather at the same time today
      </p>
      <CardGroup>
        {filterList.map((elem, index) => {
          return (
            <Card key={index} className="rounded-3 mx-1 bg-primary text-white">
              <p className="d-flex justify-content-center mt-1">
                {getDay(elem.date)}
              </p>
              <UpdateImg icon={elem.icon} />
              <p className="d-flex justify-content-center my-2">
                {Math.trunc(elem.temp)}°C
              </p>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}
