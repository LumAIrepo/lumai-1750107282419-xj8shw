import { LaunchForm } from '@/components/launch/LaunchForm'
import { LaunchPreview } from '@/components/launch/LaunchPreview'

export default function LaunchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Launch Your Meme Token
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Create and launch your meme token with automated bonding curves and fair distribution. 
            No coding required, just creativity!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <LaunchForm />
          <LaunchPreview />
        </div>
      </div>
    </div>
  )
}