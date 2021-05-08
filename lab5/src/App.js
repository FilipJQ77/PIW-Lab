import "./App.css";
import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
function App() {
  return (
    <Router>
      <div className="App">
        <Box>
          <AppBar>
            <Toolbar>
              <Button>Homepage</Button>
              <Button>Search students</Button>
              <Button>Add a student</Button>
              <Button>Search groups</Button>
              <Button>Add a group</Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route
              path="/students"
              // component={() => {}}
              component={StudentList}
            />
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

export default App;
