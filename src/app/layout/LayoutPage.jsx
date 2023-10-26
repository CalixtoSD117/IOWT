'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardTemperature from '../components/cards/CardTemperature'
import Navbar from '../components/navbar/Navbar'

const LayoutPage = () => {
  const [variableData, setVariableData] = useState();

  const accessToken = '8c92c2b88dbc84c3b1710596bfa4b49dd5f9935e';

  const getTemperature = async () => {
    const response = await axios.get('https://api.particle.io/v1/devices', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const devices = response.data;

    const temperature = devices[0].variables.temperature;

    return temperature;
  };

  getTemperature().then(temperature => {
    console.log(`The temperature is ${temperature} degrees Celsius.`);
  });


  useEffect(() => {
    // Realiza una solicitud HTTP al punto final de tu aplicación
    axios.get('https://api.particle.io/v1/devices?access_token=8c92c2b88dbc84c3b1710596bfa4b49dd5f9935e')// Asegúrate de que esta URL coincida con la configuración del Webhook en Particle Console
      .then((response) => {
        // Procesa los datos recibidos
        setVariableData(response.data);
        // console.log(response.data);
        // console.log(response.data[0].name);
        // console.log(response.data[0].variables);
        // console.log(response.data[0].variables[0]);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  return (
    <main className='bg-slate-50 min-h-screen'>
      <Navbar />

      <div className='mx-auto p-2 '>
        <h1 className='text-2xl font-semibold'>
          DashBoard
        </h1>
        <hr className='border-blue-700' />
      </div>
      {/* aqui estaran las cards */}
      <div className='bg-white m-2 shadow-sm p-2 rounded-md'>
        <CardTemperature title='Temperatura' data={variableData} />
      </div>

    </main>
  )
}

export default LayoutPage