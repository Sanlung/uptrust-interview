const TrafficLight = ({color, isLightOn}) =>
  isLightOn ? (
    <div className='traffic-light' style={{backgroundColor: color}}></div>
  ) : (
    <div className='traffic-light'></div>
  );

export default TrafficLight;
