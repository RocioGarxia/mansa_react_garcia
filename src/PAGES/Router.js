import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ItemDetail from "../components/ItemDetail"

export default function Router () {
    
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path= "/item/:id" component={ItemDetail}></Route>
            <Route exact path= "/item/:id/detail" component={ItemDetail}>
               <div>Mi detalle de producto</div>
            </Route>
            </Switch>
        </BrowserRouter>
    )
}