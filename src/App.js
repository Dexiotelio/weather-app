import "./styles.css";
import { useState, useEffect } from "react";
import WeatherForm from "./form.js";
import ContainerFunction from "./container.js";

export default function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(ShowPosition);
    async function ShowPosition(position) {
      const apiKey = "767190487282a927380cbd9ddfbce1d2";

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      const result = await response.json();

      const secondResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      const secondResult = await secondResponse.json();
      console.log(result);
      console.log(secondResponse);

      setList(
        secondResult.list.map(
          (elem) =>
            new NewLIst(
              elem.main.temp,
              elem.weather[0].description,
              elem.weather[0].icon,
              elem.dt_txt
            )
        )
      );

      setDayData({
        temp: result.main.temp,
        temp_max: result.main.temp_max,
        temp_min: result.main.temp_min,
        pressure: result.main.pressure,
        humidity: result.main.humidity,
        wind: result.wind.speed,
        description: result.weather[0].description,
        icon: result.weather[0].icon,
        city: result.name,
        country: result.sys.country,
      });

      setState(true);
    }
  }, []);

  const [dayData, setDayData] = useState({
    temp: "",
    temp_max: "",
    temp_min: "",
    pressure: "",
    humidity: "",
    wind: "",
    description: "",
    icon: "",
    city: "",
    country: "",
  });

  const [list, setList] = useState(
    Array(40).fill({
      temp: "",
      description: "",
      icon: "",
      date: "",
    })
  );

  function NewLIst(temp, description, icon, date) {
    return {
      temp: temp,
      description: description,
      icon: icon,
      date: date,
    };
  }

  const [state, setState] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const [city, code] = e.target.elements;
    const cityValue = city.value;
    const codeValue = code.value;

    const apiKey = "767190487282a927380cbd9ddfbce1d2";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${codeValue}&appid=${apiKey}&units=metric`
      );
      const result = await response.json();

      setDayData({
        temp: result.main.temp,
        temp_max: result.main.temp_max,
        temp_min: result.main.temp_min,
        pressure: result.main.pressure,
        humidity: result.main.humidity,
        wind: result.wind.speed,
        description: result.weather[0].description,
        icon: result.weather[0].icon,
        city: result.name,
        country: result.sys.country,
      });

      const secondResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue},${codeValue}&appid=${apiKey}&units=metric`
      );
      const secondResult = await secondResponse.json();

      setList(
        secondResult.list.map(
          (elem) =>
            new NewLIst(
              elem.main.temp,
              elem.weather[0].description,
              elem.weather[0].icon,
              elem.dt_txt
            )
        )
      );

      setState(true);
      setError(false);

      city.value = "";
      code.value = "";
    } catch (err) {
      city.value = "";
      code.value = "";
      setError(true);
    }
  }

  return (
    <>
      <WeatherForm handleSubmit={handleSubmit} />
      <ContainerFunction
        data={dayData}
        list={list}
        state={state}
        error={error}
      />
    </>
  );
}
