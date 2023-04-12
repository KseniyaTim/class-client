// components
import AddStudent from "../Pages/AddStudent/AddStudent";
import Courses from "../Pages/Courses/Courses";
import Grades from "../Pages/Grades/Grades";
import Students from "../Pages/Students/Students";

//routes 
import { ADD_STUDENT_ROUTE, COURSES_ROUTE, GRADES_ROUTE, STUDENTS_ROUTE } from "../consts/routes";

const RouteMaster = [
  {
    route: STUDENTS_ROUTE,
    component: Students,
  },
  {
    route: COURSES_ROUTE,
    component: Courses,
  },
  {
    route: GRADES_ROUTE,
    component: Grades,
  },
  {
    route: ADD_STUDENT_ROUTE,
    component: AddStudent
  }

];
export default RouteMaster;
