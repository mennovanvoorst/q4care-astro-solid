type Props = {
  title: string
  content: string
  image: string | undefined
  showButton: boolean
  button?: {
    link: string
    label: string
  }
}

const Hero = ({ title, content, image, button, showButton }: Props) => (
  <div class='flex flex-col gap-12 py-32 lg:flex-row lg:items-center'>
    <div class='flex flex-col'>
      <h1>{title}</h1>
      <p class='my-6 text-lg text-gray-600'>{content}</p>
      {showButton && button && (
        <a class='btn' href={button.link}>
          {button.label}
        </a>
      )}
    </div>

    <div>
      <img class='rounded-xl shadow-sm' src={image} alt='Hero image' />
    </div>
  </div>
)

export default Hero
