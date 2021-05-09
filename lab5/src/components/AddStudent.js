import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddStudent = (props) => {
  const classes = useStyles();

  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [inputTags, setInputTags] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const add = (name, mail, tags, desc) => {
    if (name && mail && tags && desc) {
      const newStudent = {
        name: name,
        mail: mail,
        tags: tags,
        desc: desc,
      };

      props.setStudents([...props.students, newStudent]);
    }
    else {
      window.alert("Fill all inputs");
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="student-name"
        label="Name"
        onChange={({ target: { value } }) => {
          setInputName(value);
        }}
      />
      <TextField
        id="student-mail"
        label="E-mail"
        onChange={({ target: { value } }) => {
          setInputMail(value);
        }}
      />
      <TextField
        id="student-tags"
        label="Tags"
        multiline
        rowsMax={2}
        onChange={({ target: { value } }) => {
          setInputTags(value);
        }}
      />
      <TextField
        id="student-desc"
        label="Description"
        multiline
        rowsMax={4}
        onChange={({ target: { value } }) => {
          setInputDesc(value);
        }}
      />
      <br />
      <Button
        variant="outlined"
        onClick={() => add(inputName, inputMail, inputTags, inputDesc)}
      >
        Add a student
      </Button>
    </form>
  );
};

export default AddStudent;
