type Props = {
  icon: string
  title: string
  description: string
}

const FeatureCard = ({ icon, description, title }: Props) => (
  <li class='grid grid-cols-1 grid-rows-[40px_1fr] gap-4 rounded-xl bg-white border border-gray-100 text-center shadow-sm p-6'>
    <div class='h-12 w-12 mx-auto mb-6'>
      <i class={`ti ti-${icon} text-red-500 text-5xl`}></i>
    </div>

    <div>
      <span class='font-medium text-gray-900'>{title}</span>
      <p class='mt-2 text-gray-600'>{description}</p>
    </div>
  </li>
)

export default FeatureCard
