import Course from './Course'
import { TypeCourseFields } from '../types.d'

type Props = {
  courses: TypeCourseFields[]
  classes?: string
}

const Courses = ({ courses, classes = '' }: Props) => {
  const courseItems = courses.map((props) => <Course {...props} />)

  return (
    <div class={classes}>
      <ul class='grid grid-cols-1 gap-x-8 gap-y-10 mx-auto lg:grid-cols-3 lg:gap-y-14'>
        {courseItems}
      </ul>
    </div>
  )
}

export default Courses
