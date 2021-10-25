import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/prodlist"><ProductList /></Route>
                <Route path="/prod"><Product /></Route>
                <Route path="/register"><Register /></Route>
                <Route path="/signin"><Login /></Route>
                <Route path="/cart"><Cart /></Route>
            </Switch>
        </Router>
    )
}
