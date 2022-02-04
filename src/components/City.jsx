import { useState, useEffect } from "react";
import { Card, Image, InputGroup, FormControl, Button } from "react-bootstrap";
import { fetchWeather } from "../redux/actions";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const City = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useSelector((state) => state.locations.data);
  const day = new Date().toLocaleString();

  useEffect(() => {
    // WIP
    dispatch(fetchWeather("london"));
  }, []);
  return (
    <>
      {" "}
      <InputGroup
        size="sm"
        className=""
        style={{ width: "30rem", borderRadius: "2rem" }}
      >
        <FormControl
          aria-label="Small"
          placeholder="Search city"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />{" "}
        <InputGroup.Prepend>
          <button
            onClick={() => {
              dispatch(fetchWeather(query));
            }}
            id="inputGroup-sizing-sm"
          >
            Search
          </button>
        </InputGroup.Prepend>
      </InputGroup>
      <Card
        className="bg-dark ml-5 text-white mt-2 d-flex justify-content-center align-items-center"
        style={{ width: "30rem", borderRadius: "2rem" }}
      >
        <Card.Img
          src="https://cdn.pixabay.com/photo/2012/02/16/12/31/storm-13679_960_720.jpg"
          style={{ borderRadius: "2rem" }}
        />
        <Card.ImgOverlay>
          <Card.Body>
            <div style={{ color: "#78cbbf" }}>{day}</div>

            {location.slice(0, 1).map((weather, i) => (
              <>
                <Card.Title>
                  <h6 className="flex-grow-1">{weather?.name}</h6>
                </Card.Title>
                <Card.Title>
                  <h1 className="mb-0 font-weight-bold" id="heading">
                    {Math.round(weather.main?.temp)}° C
                  </h1>
                  <span className="small grey">
                    {weather.weather[0]?.description}
                  </span>
                </Card.Title>

                <Card.Text>
                  <p
                    className="my-1"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Image
                      src="https://image.pngaaa.com/943/2745943-middle.png"
                      height="17px"
                    />
                    <span> {weather.wind?.speed} km/h </span>
                  </p>
                  <p className="my-1">
                    <i className="fa fa-tint mr-2" aria-hidden="true" />
                    <span>Humidity {weather.main?.humidity}% </span>
                  </p>
                </Card.Text>
              </>
            ))}
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
export default City;
