import React from 'react'

export const CardValue = ({calidad}) => {
    return (
        <div>
            <div 
            className={`shadow-md w-72 h-52 p-2 rounded-md flex flex-col justify-center items-center 
            ${calidad >= 0 && calidad <= 1 ? "bg-green-400 text-white font-semibold text-xl" : 
            calidad > 1 && calidad <= 2 ? "bg-green-600 text-white font-semibold text-xl": 
            calidad > 2 && calidad <= 3 ? "bg-green-800 text-white font-semibold text-xl": 
            calidad > 3 && calidad <= 5 ? "bg-red-800 text-white font-semibold text-xl" : 
            "No hay datos"}`}>

                <h1 className='text-center'>
                    {calidad >= 0 && calidad <= 1 ? "segura para consumo humano": 
                    calidad > 1 && calidad <= 2 ? "Sin riesgo, apto para uso y consumo humano ": 
                    calidad > 2 && calidad <= 3 ? "Apto para uso de riego" : 
                    calidad > 3 && calidad <= 5 ? "no apto para uso humano " : 
                    "No hay datos"
                    }
                </h1>

            </div>
        </div>
    )
}
