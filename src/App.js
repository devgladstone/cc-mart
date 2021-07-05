import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AdminPage from "./component/AdminPage";
import UserPage from "./component/UserPage";
import Container from "./component/Container";

function App() {
  return (
    <div className="">
      <Container>
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/">
            <UserPage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
