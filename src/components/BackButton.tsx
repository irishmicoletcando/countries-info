import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

const BackButton = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div>
      <button 
        onClick={handleBack}
        className='bg-white border btn border-grey-50 dark:border-blue-950 text-grey-950 dark:text-white dark:bg-blue-900'
      >
        <ArrowLeft />
        Back
      </button>
    </div>
  )
}

export default BackButton