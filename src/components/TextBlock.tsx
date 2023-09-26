import classNames from 'classnames'
import Button from './Button'

type Props = {
  title: string
  description: string
  label: string
  destination: string
  classes?: string
}

const TextBlock = ({
  description,
  title,
  label,
  destination,
  classes
}: Props) => (
  <div
    class={classNames(
      classes,
      'relative overflow-hidden bg-white border border-gray-100 px-12 py-20 my-16 shadow-sm rounded-3xl max-w-4xl mx-auto'
    )}
  >
    <div class='max-w-2xl mx-auto lg:text-center'>
      <h2>{title}</h2>
      <p class='my-6 text-lg text-gray-600'>{description}</p>
      <a class='btn' href={destination}>
        {label}
      </a>
    </div>
  </div>
)

export default TextBlock
