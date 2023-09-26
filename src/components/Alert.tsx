import className from 'classnames'

type Props = {
  content: Record<'success' | 'fail', string>
  type: 'success' | 'fail'
}

const Alert = ({ content, type }: Props) => (
  <div
    class={className('rounded-xl mb-4 p-4 shadow-sm', {
      'bg-green-100 border-green-500 text-green-900': type === 'success',
      'bg-red-100 border-red-500 text-red-900': type === 'fail'
    })}
    role='alert'
  >
    <div class='flex gap-2 items-center'>
      <i
        class={className('ti text-2xl', {
          'ti-circle-check text-green-500': type === 'success',
          'ti-circle-x text-red-500': type === 'fail'
        })}
      ></i>
      <p class='font-bold'>{content[type]}</p>
    </div>
  </div>
)

export default Alert
