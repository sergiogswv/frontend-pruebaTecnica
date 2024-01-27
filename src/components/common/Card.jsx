import { useState } from 'react'

const Card = ({ entry }) => {
  console.log(entry)
  const [fullDescription, setFullDescription] = useState(false)
  const newDate = entry.datePublished !== undefined ? entry.datePublished.replaceAll('/', '-') : entry.datepublished
  return (
    <div className='max-w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700'>
      <h3 className='mb-2 text-3xl lg:text-4xl font-bold tracking-tight  text-white'>
        {entry.title}
      </h3>
      <h4 className='mb-2 text-md md:text-lg font-bold tracking-tight text-white italic uppercase'>
        Autor: {entry.author}
      </h4>
      <p className='mb-2 text-md font-bold tracking-tight text-gray-300 italic'>
        Publicado: {newDate}
      </p>
      <p className='mb-3 font-normal text-gray-400'>
        {fullDescription ? entry.content : entry.content.slice(0, 70)}
      </p>
      <button
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
        onClick={() => setFullDescription(!fullDescription)}
      >
        {!fullDescription ? 'Ver más' : 'Ocultar'}
      </button>
    </div>
  )
}

export default Card
