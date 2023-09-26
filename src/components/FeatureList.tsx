type Props = {
  icon: string
  title: string
  description: string
}

const FeatureList = ({ icon, description, title }: Props) => (
  <li class='grid grid-cols-[40px_1fr] gap-4'>
    <div class='flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 shadow-sm'>
      <i class={`ti ti-${icon} text-white text-2xl`}></i>
    </div>

    <div>
      <span class='font-medium text-gray-900'>{title}</span>
      <p class='mt-2 text-gray-600'>{description}</p>
    </div>
  </li>
)

export default FeatureList
