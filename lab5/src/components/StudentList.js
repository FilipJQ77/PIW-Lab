import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
}));

const StudentList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>{/* todo tu wstawic student tile */}</List>
  );
};

export default StudentList;
