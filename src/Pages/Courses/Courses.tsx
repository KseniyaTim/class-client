//react
import { FC } from "react";

//react router
import { useHistory } from "react-router-dom";

//consts
import { ADD_COURSE_ROUTE } from "../../consts/routes";

//mui
import { Button } from "@mui/material";

const Courses: FC = () => {
  const history = useHistory();
  return (
    <div>
      <Button
        variant="contained"
        sx={{backgroundColor: 'darkcyan'}}
        onClick={() => {
          history.push(ADD_COURSE_ROUTE);
        }}
      >
        Add a course
      </Button>
    </div>
  );
};

export default Courses;
