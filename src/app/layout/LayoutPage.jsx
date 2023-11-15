'use client'
import { useEffect, useState } from 'react';
import CardTemperature from '../components/cards/CardTemperature';
import Navbar from '../components/navbar/Navbar';
import { Toaster, toast } from 'react-hot-toast';
import { CardValue } from '../components/cards/CardValue';

const LayoutPage = () => {
  const [variableData, setVariableData] = useState(null);
  console.log(variableData)
  let ws; // Declara la variable WebSocket fuera del useEffect


  useEffect(() => {
    // Establece la conexión WebSocket
    ws = new WebSocket('ws://localhost:4000/data');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const parsedData = JSON.parse(data.data);
      setVariableData(parsedData);
      console.log(parsedData)
    };

  }, []); // El array de dependencias vacío garantiza que este efecto se ejecute solo una vez

  const [notificationShown, setNotificationShown] = useState({
    highTemperature: false,
    normalTemperature: false,
    lowTemperature: false,
    deathNotification: false,
  });

  useEffect(() => {
    // Restablecer todas las notificaciones a falso
    setNotificationShown({
      highTemperature: false,
      normalTemperature: false,
      lowTemperature: false,
      deathNotification: false,
    });

    if (variableData && variableData.temperatura === 0) return;

    if (variableData && variableData.temperatura === 100) {
      toast('¡Ya estás muerto mi compa!', {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setNotificationShown((prevNotifications) => ({ ...prevNotifications, deathNotification: true }));
    } else if (variableData && variableData.temperatura > 50 && variableData.temperatura < 100) {
      toast('¡La temperatura es muy alta!', {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setNotificationShown((prevNotifications) => ({ ...prevNotifications, highTemperature: true }));
    } else if (variableData && variableData.temperatura >= 36 && variableData.temperatura <= 38) {
      toast('¡La temperatura está normal!', {
        icon: '👍',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setNotificationShown((prevNotifications) => ({ ...prevNotifications, normalTemperature: true }));
    } else if (variableData && variableData.temperatura < 17) {
      toast('¡La temperatura es más baja de lo normal!', {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setNotificationShown((prevNotifications) => ({ ...prevNotifications, lowTemperature: true }));
    }
  }, [variableData]);

  return (
    <main className='bg-slate-50 min-h-screen'>
      <Navbar />
      <div className='mx-auto p-2 '>
        <h1 className='text-2xl font-semibold'>
          DashBoard
        </h1>
        <hr className='border-blue-700' />
      </div>
      {/* aquí estarán las cards */}
      <div className='bg-white m-2 shadow-sm p-2 rounded-md flex justify-center items-center gap-20'>
        <div>
          <CardTemperature lines={[ 0.2,0.3, 0.3, 0.2]} colors={["blue","green","#ffa500","#ff0000"]} datatitle="Temperatura:" simbol="°C" limite={100} title='Temperatura' data={variableData ? variableData.temperatura : null} />
        </div>
        <div>
          <CardTemperature lines={[ 0.2,0.3, 0.2, 0.2, 0.1]} colors={["blue","green","green","#ffa500","#ff0000"]} datatitle="Calidad" simbol="NTU" limite={5} title='Calidad' data={variableData ? variableData.calidad : null} />
        </div>
        <div>
          <CardValue calidad={variableData ? variableData.calidad : null}/>
        </div>
      </div>
      <Toaster
        position="top-right"
      />
    </main>
  );
};

export default LayoutPage;
