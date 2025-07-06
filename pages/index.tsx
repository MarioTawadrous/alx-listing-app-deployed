import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { APP_NAME } from '../constants'

const Home = () => {
  const handleClick = () => alert('Action triggered!')
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">{APP_NAME}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card
            title="Modern Apartment"
            description="Stylish apartment in city center"
            imageUrl="/assets/placeholder.jpg"
          />
          <Card
            title="Beach Villa"
            description="Luxury villa with ocean view"
            imageUrl="/assets/placeholder.jpg"
          />
        </div>
        
        <div className="flex justify-center gap-4">
          <Button 
            label="Book Now" 
            variant="primary" 
            onClick={handleClick} 
          />
          <Button 
            label="View Details" 
            variant="secondary" 
            onClick={handleClick} 
          />
        </div>
      </div>
    </div>
  )
}

export default Home
