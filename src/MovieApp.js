import Home from "./routes/home";
import Detail from "./routes/Detail";
//Hash Router/ Browser Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
function MovieApp() {
    return <Router>
        <Switch>
            <Route path="/movie/:id">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
}

export default MovieApp;