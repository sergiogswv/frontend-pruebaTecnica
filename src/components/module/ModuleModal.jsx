import { useRef, useState } from 'react'
import { classesInput, classesLabel } from '../utils/classesForm'
import { api } from '../config/api'
import Alert from '../common/Alert'

const ModuleModal = ({ setModal, setEntries, entries }) => {
  const titleRef = useRef()
  const authorRef = useRef()
  const contentRef = useRef()
  const dateRef = useRef()
  const [errors, setErrors] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const uuid = crypto.randomUUID()
    const dataSend = {
      uuid,
      title: titleRef.current.value,
      author: authorRef.current.value,
      content: contentRef.current.value,
      datePublished: dateRef.current.value
    }
    const body = JSON.stringify(dataSend)
    const response = await fetch(
      `${api}/entries`,
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body
      })
    const result = await response.json()

    if (result.issues) {
      setErrors(result.issues)
      console.log(result.issues)
      return
    }

    setEntries([...entries, dataSend])

    setModal(false)
  }

  return (
    <div className='h-screen w-full absolute top-0 bg-slate-300/70 grid'>
      {errors !== null &&
        errors.map(error => (<Alert key={error.path} message={error.message} />))}
      <form className='w-full md:w-6/12 lg:w-4/12 mx-auto md:my-auto bg-slate-500 rounded-lg p-5' onSubmit={handleSubmit}>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='titulo'
            id='titulo'
            className={classesInput}
            placeholder=' '
            required
            ref={titleRef}
          />
          <label htmlFor='titulo' className={classesLabel}>Título</label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='autor'
            id='autor'
            className={classesInput}
            placeholder=' '
            required
            ref={authorRef}
          />
          <label htmlFor='autor' className={classesLabel}>Autor</label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='contenido'
            id='contenido'
            className={classesInput}
            placeholder=' '
            required
            ref={contentRef}
          />
          <label htmlFor='contenido' className={classesLabel}>Contenido</label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='date'
            name='fecha publicada'
            id='fecha publicada'
            className={classesInput}
            placeholder=' '
            required
            ref={dateRef}
          />
          <label htmlFor='fecha publicada' className={classesLabel}>Contenido</label>
        </div>
        <button
          type='submit'
          className='text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
        >Guardar
        </button>
        <button
          className='text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800 mt-2 md:mt-0 md:ml-2'
          onClick={() => setModal(false)}
        >Cancelar
        </button>
      </form>

    </div>
  )
}

export default ModuleModal
