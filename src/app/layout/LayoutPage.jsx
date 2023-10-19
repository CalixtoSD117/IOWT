'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardTemperature from '../components/cards/CardTemperature';
import Navbar from '../components/navbar/Navbar';

const LayoutPage = () => {
  const [variableData, setVariableData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post('https://iowt.vercel.app/dashboardpage', null, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        console.log(response.data);
        setVariableData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener datos. Por favor, inténtalo de nuevo.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='bg-slate-50 min-h-screen'>
      <Navbar />

      <div className='mx-auto p-2'>
        <h1 className='text-2xl font-semibold'>Dashboard</h1>
        <hr className='border-blue-700' />
      </div>

      <div className='bg-white m-2 shadow-sm p-2 rounded-md'>
        {loading ? (
          <p>Cargando datos...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CardTemperature title='Temperatura' data={variableData} />
        )}
      </div>
    </main>
  );
};

export default LayoutPage;
