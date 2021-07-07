import "./App.css";
import { Switch, Route } from "react-router-dom";
import AdminPage from "./component/Admin/AdminPage";
import UserPage from "./component/User/UserPage";
import SidebarLayout from "./component/Layout/SidebarLayout";

function App() {
  return (
    <SidebarLayout>
      <Switch>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/">
          <UserPage />
        </Route>
      </Switch>
    </SidebarLayout>
  );
}

export default App;
