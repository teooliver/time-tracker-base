import { Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import TimeTracker from "./pages/TimeTracker";

const AppRoutes = () => {
  return (
    <section className='AppRoutes'>
      <Switch>
        <Route path={"/"} exact component={TimeTracker} />
        <Route path={"/projects"} exact component={Projects} />
        <Route path='/clients' exact component={Clients} />
      </Switch>
    </section>
  );
};
