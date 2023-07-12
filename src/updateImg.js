import Image from "react-bootstrap/Image";

export default function UpdateImg({ icon }) {
  switch (icon) {
    case "01d":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/512/1163/1163662.png" />
        );
      }
      break;
    case "01n":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/512/1163/1163645.png" />
        );
      }
      break;
    case "02d":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" />
        );
      }
      break;
    case "02n":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/128/1163/1163630.png" />
        );
      }
      break;
    case "03d":
    case "03n":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/128/1163/1163624.png" />
        );
      }
      break;
    case "04d":
    case "04n":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/512/1163/1163634.png" />
        );
      }
      break;
    case "09d":
    case "09n":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/128/1163/1163626.png" />
        );
      }
      break;
    case "10n":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/128/1163/1163644.png" />
        );
      }
      break;
    case "10d":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/128/1163/1163657.png" />
        );
      }
      break;
    case "11n":
    case "11d":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/128/1163/1163636.png" />
        );
      }
      break;
    case "13n":
    case "13d":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/512/1163/1163629.png" />
        );
      }
      break;
    case "50n":
    case "50d":
      {
        return (
          <Image src="https://cdn-icons-png.flaticon.com/128/1163/1163673.png" />
        );
      }
      break;
  }
}
