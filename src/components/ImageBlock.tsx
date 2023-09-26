import classNames from 'classnames'

type Props = {
  description: string
  image?: string
  classes?: string
}

const ImageBlock = ({ description, image, classes = '' }: Props) => (
  <div
    class={classNames(
      classes,
      'relative overflow-hidden bg-gray-200 px-12 py-20 my-16 shadow-xl rounded-3xl'
    )}
  >
    <img
      class='absolute inset-0 h-full w-full object-cover'
      src={image}
      alt=''
    />
    <div class='absolute inset-0 bg-gray-900/60 mix-blend-multiply'></div>

    <div class='relative mx-auto max-w-2xl lg:mx-0'>
      <span class='mt-6 text-lg font-light text-white sm:text-xl sm:leading-8'>
        {description}
      </span>
    </div>
  </div>
)

export default ImageBlock
