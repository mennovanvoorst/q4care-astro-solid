import classNames from 'classnames'

type Props = {
  title: string
  description: string
  classes?: string
}

const PageHeader = ({
  description,
  title,
  label,
  destination,
  classes
}: Props) => (
  <div class={classNames(classes, 'relative mb-12')}>
    <h2>{title}</h2>
    <p class='my-6 text-lg text-gray-600'>{description}</p>
  </div>
)

export default PageHeader
