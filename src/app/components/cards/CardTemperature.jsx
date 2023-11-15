import GaugeChart from 'react-gauge-chart';

const CardTemperature = ({ title = "change the title", data, datatitle, simbol, limite, colors, lines}) => {


  return (
    <div className="shadow-md w-72 h-52 p-2 rounded-md flex flex-col justify-between items-center ">
      <div>
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className=''> 
      <GaugeChart
        id="temperature-gauge"
        textColor="#000000"
        nrOfLevels={10}
        arcsLength={lines}
        colors={colors}
        percent={data / limite}
        hideText 
      />
      
      
      </div>

      <p>{datatitle} <span className='font-medium'>{data} {simbol}</span> </p>

    </div>
  )
}

export default CardTemperature