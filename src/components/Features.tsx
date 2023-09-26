import FeatureList from './FeatureList'
import FeatureCard from './FeatureCard'

type Props = {
  title: string
  content: string
  features: {
    icon: string
    title: string
    description: string
  }[]
  type: 'feature' | 'featureCard'
  classes?: string
}

const Features = ({ title, content, features, type, classes = '' }: Props) => {
  const featureItems = features.map((props) => {
    switch (type) {
      case 'feature':
        return <FeatureList {...props} />
      case 'featureCard':
        return <FeatureCard {...props} />
    }
  })

  return (
    <div class={classes}>
      <div class='max-w-2xl mx-auto lg:text-center'>
        <h2>{title}</h2>
        <p class='my-6 text-lg text-gray-600'>{content}</p>
      </div>

      <ul class='grid grid-cols-1 gap-x-8 gap-y-10 mx-auto mt-16 lg:grid-cols-3 lg:gap-y-14'>
        {featureItems}
      </ul>
    </div>
  )
}

export default Features
