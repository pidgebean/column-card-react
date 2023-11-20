import './index.css'
import Card from './Card';
import { ReactComponent as Sedan } from "./images/icon-sedans.svg";
import { ReactComponent as Suvs } from "./images/icon-suvs.svg";
import { ReactComponent as Lux } from "./images/icon-luxury.svg";

function App() {
  return (
    <body>
      <Card
        className={'orange'}
        title={'Sedans'}
        image={<Sedan/>}
        descr={
          'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'}
        />
      <Card
        className={'blue'}
        title={'Suvs'}
        image={<Suvs/>}
        descr={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures'}
        />
      <Card
        className={'green'}
        title={'Luxury'}
        image={<Lux/>}
        descr={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style'}
        />
    </body>
  );
}

export default App;
