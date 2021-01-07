import { Switch, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Projects from "./pages/Projects";
import Tags from "./pages/Tags";
import TimeTracker from "./pages/TimeTracker";

export const AppRoutes = () => {
  return (
    <section className='AppRoutes'>
      <Switch>
        <Route path={"/"} exact component={TimeTracker} />
        <Route path={"/projects"} exact component={Projects} />
        <Route path='/clients' exact component={Clients} />
        <Route path='/tags' exact component={Tags} />
      </Switch>
    </section>
  );
};
