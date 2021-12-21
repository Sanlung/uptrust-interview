import React from "react";
import TrafficLight from "./TrafficLight";

const TrafficLightBox = () => {
  const [trafficLights, setTrafficLights] = React.useState({
    red: true,
    yellow: false,
    green: false,
  });

  const switchLights = React.useCallback(() => {
    setTimeout(() => {
      setTrafficLights({
        red: false,
        yellow: false,
        green: true,
      });
    }, 4000);
    setTimeout(() => {
      setTrafficLights({
        red: false,
        yellow: true,
        green: false,
      });
    }, 8000);
    setTimeout(() => {
      setTrafficLights({
        red: true,
        yellow: false,
        green: false,
      });
    }, 10000);
    setTimeout(() => {
      switchLights();
    }, 10000);
  }, []);

  React.useEffect(() => {
    switchLights();
  }, [switchLights]);

  return (
    <div className='traffic-light-box'>
      <TrafficLight color='red' isLightOn={trafficLights.red} />
      <TrafficLight color='yellow' isLightOn={trafficLights.yellow} />
      <TrafficLight color='lightseagreen' isLightOn={trafficLights.green} />
    </div>
  );
};

export default TrafficLightBox;
