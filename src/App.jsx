import { useEffect, useState } from 'react'
import Card from './components/common/Card'
import Layout from './components/layout/Layout'
import ModuleSearch from './components/module/ModuleSearch'
import { api } from './components/config/api'
import ModuleModal from './components/module/ModuleModal'

function App () {
  const [loading, setLoading] = useState(true)
  const [entries, setEntries] = useState([])
  const [entriesFilter, setEntriesFilter] = useState(null)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const getEntries = async () => {
      const response = await fetch(`${api}/entries`)
      const data = await response.json()
      setEntries(data)
    }

    getEntries()
    setLoading(false)
  }, [])

  return (
    <Layout>
      <section>

        <div className='md:flex md:justify-between'>
          <button
            className='tems-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-green-600 hover:bg-green-700 focus:ring-green-800 w-full md:w-[150px] h-[40px] my-2 md:my-10 uppercase'
            onClick={() => setModal(true)}
            type='button'
          >
            Agregar
          </button>
          <ModuleSearch setEntriesFilter={setEntriesFilter} entriesFilter={entriesFilter} />
        </div>

        <article className='w-full md:w-10/12 lg:w-8/120 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2'>
          {!loading && (entriesFilter === null
            ? entries.map(entry => (<Card key={entry.id} entry={entry} />))
            : entriesFilter.map(entry => (<Card key={entry.id} entry={entry} />)))}
        </article>

        {entries.length === 0 && <p className='text-center w-full text-lg md:text-xl lg:text-2xl'>No hay información disponible, agrega contenido nuevo con el botón verde</p>}

        {modal && <ModuleModal setModal={setModal} setEntries={setEntries} entries={entries} />}
      </section>
    </Layout>
  )
}

export default App
