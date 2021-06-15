import { Route, Switch } from "react-router-dom";
import Home from './Home'

export default function App() {
  return (
    <Switch>
      <Route path="/:id" exact component={Home} />
    </Switch>
  );
}
