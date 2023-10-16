
import CardTemperature from '../components/cards/CardTemperature'
import Navbar from '../components/navbar/Navbar'

const LayoutPage = () => {
  return (
    <main className='bg-slate-50 min-h-screen'>
      <Navbar/>

      <div className='mx-auto p-2 '>
        <h1 className='text-2xl font-semibold'>
          DashBoard
        </h1>
        <hr className='border-blue-700' />
      </div>
      {/* aqui estaran las cards */}
      <div className='bg-white m-2 shadow-sm p-2 rounded-md'>
          <CardTemperature/>
      </div>

    </main>
  )
}

export default LayoutPage