import React from "react";
import "./App.css";

function DistanceToTimeCalculator() {
  const [distance, setDistance] = React.useState({
    walking: "",
    driving: "",
    flight: "",
  });
  let walkingSpeedPerHour = 3.6;
  let drivingSpeedPerHour = 50;
  let flightSpeedPerHour = 800;

  const updateValue = (ev) =>
    setDistance({
      value: ev.target.value,
      walking: ((+ev.target.value * 60) / walkingSpeedPerHour).toFixed(2),
      driving: ((+ev.target.value * 60) / drivingSpeedPerHour).toFixed(2),
      flight: ((+ev.target.value * 60) / flightSpeedPerHour).toFixed(1),
    });
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return (
      rhours + " hour(s) and " + rminutes + " minute(s)."
    );
  }
  return (
    <form>
      <h1>DISTANCE TO TIME CALCULATOR</h1>
      <br></br>
      <div id="container">
        <div id="distance">
          Distance In KM:
          <input
            id="distance"
            type="number"
            value={distance.value}
            onChange={updateValue}
          ></input>
        </div>

        <div id="timeWalking">
          Walking Time In Hours&Minutes:
          <button value={distance.walking} onChange={updateValue}>
            <span>{timeConvert(distance.walking)}</span>
          </button>
        </div>

        <div id="timeDriving">
          Driving Time In Hours&Minutes:
          <button value={distance.driving} onChange={updateValue}>
            {" "}
            <span>{timeConvert(distance.driving)}</span>
          </button>
        </div>
        <div id="timeFlying">
          Flying Time In Hours&Minutes:
          <button value={distance.flight} onChange={updateValue}>
            <span>{timeConvert(distance.flight)}</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default DistanceToTimeCalculator;
