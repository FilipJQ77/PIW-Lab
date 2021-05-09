import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import GroupTile from "./GroupTile";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
}));

const GroupList = (props) => {
  const classes = useStyles();

  const [groups, setGroups] = useState(props.groups);

  return <List className={classes.root}>
    {
      (groups).map(group =>{
        return (
          <GroupTile
          name={group.name}
          desc={group.desc}
          />
        )
      })
    }
    </List>;
};

export default GroupList;
