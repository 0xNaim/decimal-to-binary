import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Notes from "./pages/Notes";

const color = createMuiTheme({
  palette: {
    primary: {
      main: "#43A047",
    },
    secondary: {
      main: "#FF5722",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={color}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
