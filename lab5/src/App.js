import "./App.css";
import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import GroupList from "./components/GroupList";
import AddGroup from "./components/AddGroup";

const defaultStudents = [
  {
    name: "Arek",
    desc: "I like trains",
    mail: "arek@gmail.com",
    tags: "Docker, Python",
  },
  {
    name: "Marek",
    desc: "I like carrots",
    mail: "marek@gmail.com",
    tags: "Docker, Python",
  },
  {
    name: "Robert Lewandowski",
    desc: "I like Germany and Grappa Ice",
    mail: "robertlewandowski@gmail.com",
    tags: "Docker, Python, Bayern Munich",
  },
];

const defaultGroups = [
  {
    name: "Microsoft",
    desc: "Linux bad",
  },
  {
    name: "Linux",
    desc: "Microsoft bad",
  },
  {
    name: "Apple",
    desc: "Everything bad",
  },
];

const App = () => {
  const [students, setStudents] = useState(defaultStudents);
  const [groups, setGroups] = useState(defaultGroups);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Button component={Link} to="/">
                Homepage
              </Button>
              <Button component={Link} to="/students">
                Search students
              </Button>
              <Button component={Link} to="/addStudent">
                Add a student
              </Button>
              <Button component={Link} to="/groups">
                Search groups
              </Button>
              <Button component={Link} to="/addGroup">
                Add a group
              </Button>
            </Toolbar>
          </AppBar>
          <Box>
            <Switch>
              <Route
                path="/students"
                component={() => <StudentList students={students} />}
              />
              <Route
                path="/addStudent"
                component={() => (
                  <AddStudent students={students} setStudents={setStudents} />
                )}
              />
              <Route
                path="/groups"
                component={() => (
                  <GroupList groups={groups} setGroups={setGroups} />
                )}
              />
              <Route
                path="/addGroup"
                component={() => (
                  <AddGroup groups={groups} setGroups={setGroups} />
                )}
              />
              <Route path="/">
                Welcome to my site. Use the app bar above to navigate throghout
                the site.
              </Route>
            </Switch>
          </Box>
        </Box>
      </div>
    </Router>
  );
};

export default App;
