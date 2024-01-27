import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Sergio Guadarrama</title>
      </Helmet>
      <nav className='w-full bg-blue-400 h-[80px] rounded-b-lg text-white'>
        <h1 className='text-xl md:text-2xl lg:text-3xl text-center pt-2 text-pretty'>Listado y buscador de contenido</h1>
        <h2 className='text-md md:text-lg lg:text-xl italic text-center'>Prueba técnica - Sergio Guadarrama</h2>
      </nav>

      <main className='min-w-full'>
        {children}
      </main>
    </>
  )
}

export default Layout
