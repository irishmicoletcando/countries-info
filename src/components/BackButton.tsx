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
        className='btn bg-outline bg-blue-900 mb-10'
      >
        <ArrowLeft />
        Back
      </button>
    </div>
  )
}

export default BackButton