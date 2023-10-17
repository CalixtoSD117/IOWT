import GaugeChart from 'react-gauge-chart';

const CardTemperature = ({ title = "change the title", data }) => {
  // Convierte los datos en una cadena JSON
  const jsonData = JSON.stringify(data);

  return (
    <div className="shadow-md w-72 h-52 p-2 rounded-md flex flex-col justify-between items-center">
      <div>
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className=''>
        <GaugeChart
          id="temperature-gauge"
          textColor="#000000"
          nrOfLevels={10}
          arcsLength={[0.2, 0.3, 0.3, 0.2]}
          colors={['blue', 'green', '#ffa500', '#ff0000']}
          percent={data / 100}
          hideText
        />
      </div>
      <p>Temperatura: <span className='font-medium'>{jsonData} °C</span></p>
    </div>
  )
}

export default CardTemperature
