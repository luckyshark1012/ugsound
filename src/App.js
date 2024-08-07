import { useRoutes } from "react-router-dom";
import routesList from "./utils/routeConfig";



function App() {
  const routes = useRoutes(routesList);
  return routes;
}

export default App;
