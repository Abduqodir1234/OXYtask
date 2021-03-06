import IndexPage from "./Pages";
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Products from "./Pages/products";
import Search from "./Pages/search";
import NotFound from "./Pages/404";
function App() {
  return (
    <BrowserRouter>
      <Navbar /><br/> 
      <Switch>
        <Route exact path="/"><IndexPage /></Route>
        <Route exact path="/search"><Search /></Route>
        <Route exact path="/products"><Products/> </Route>
        <Route path="*"  component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
