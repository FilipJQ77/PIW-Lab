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

const AddGroup = (props) => {
  const classes = useStyles();

  const [inputName, setInputName] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const add = (name, desc) => {
    if (name && desc) {
      const newGroup = {
        name: name,
        desc: desc,
      };

      props.setGroups([...props.groups, newGroup]);
    } else {
      window.alert("Fill all inputs");
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="group-name"
        label="Name"
        onChange={({ target: { value } }) => {
          setInputName(value);
        }}
      />
      <TextField
        id="group-desc"
        label="Description"
        multiline
        rowsMax={4}
        onChange={({ target: { value } }) => {
          setInputDesc(value);
        }}
      />
      <br />
      <Button variant="outlined" onClick={() => add(inputName, inputDesc)}>
        Add a group
      </Button>
    </form>
  );
};

export default AddGroup;
