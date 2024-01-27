const Alert = ({ message }) => {
  return (
    <div className='absolute z-40 md:top-10 right-0 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400' role='alert'>
      <span className='font-medium'>Error!</span> {message}
    </div>
  )
}

export default Alert
