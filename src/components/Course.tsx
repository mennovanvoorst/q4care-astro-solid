import classNames from 'classnames'

type Props = {
  id: string
  title: string
  description: string
  image?: string
  classes?: string
}

const Course = ({ id, title, description, image, classes = '' }: Props) => (
  <a href={`/cursussen/${id}`}>
    <div
      class={classNames(
        classes,
        'relative overflow-hidden bg-gray-200 flex flex-col px-12 py-12 shadow-sm rounded-2xl h-full',
        'md:py-20',
        'hover:shadow-xl'
      )}
    >
      <img
        class='absolute inset-0 h-full w-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        src={image}
        alt=''
      />
      <div class='absolute inset-0 bg-gray-900/60 mix-blend-multiply'></div>
      <div class='relative mx-auto max-w-2xl flex items-center h-full lg:mx-0'>
        <h3 class='text-lg font-light text-white sm:text-xl'>{title}</h3>
      </div>
    </div>
  </a>
)

export default Course
