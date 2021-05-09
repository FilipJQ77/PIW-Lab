import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import StudentTile from "./StudentTile";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
}));

const StudentList = (props) => {
  const classes = useStyles();

  const [students, setStudents] = useState(props.students);

  return <List className={classes.root}>
    {
      (students).map(student =>{
        return (
          <StudentTile
          name={student.name}
          mail={student.mail}
          desc={student.desc}
          tags={student.tags}
          />
        )
      })
    }
    </List>;
};

export default StudentList;
