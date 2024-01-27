import { useRef } from 'react'
import { api } from '../config/api'

const ModuleSearch = ({ setEntriesFilter, entriesFilter }) => {
  const searchText = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `${api}/entries/entry?title=${searchText.current.value}&content=${searchText.current.value}&author=${searchText.current.value}`)
    const data = await response.json()
    setEntriesFilter(data)
  }

  return (
    <div className='flex'>
      <form className='my-10 w-full flex gap-2 justify-between px-2 md:justify-end' onSubmit={handleSubmit}>
        {entriesFilter !== null &&
          <button
            className='tems-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 w-[100px] md:w-[150px] h-[40px]'
            onClick={() => setEntriesFilter(null)}
            type='button'
          >
            Quitar filtro
          </button>}
        <input
          type='text'
          placeholder='título, autor o contenido'
          className='border-slate-800 border-[1px] rounded-lg w-8/12 md:w-[400px] h-[40px]'
          ref={searchText}
        />
        <input
          value='buscar'
          type='submit'
          className='items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 h-[40px]'
        />
      </form>
    </div>
  )
}

export default ModuleSearch
