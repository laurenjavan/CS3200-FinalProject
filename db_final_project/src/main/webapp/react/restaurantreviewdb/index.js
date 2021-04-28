
import RatingListForRestaurant from "./ratings/rating-list-for-restaurant";
import RatingListForPatron from "./ratings/rating-list-for-patron";
import RatingList from "./ratings/rating-list";
import PatronFormEditor from "./patrons/patron-editor";
import RestaurantList from "./restaurants/restaurant-list";
import RestaurantFormEditor from "./restaurants/restaurant-editor";
import RatingFormEditor from "./ratings/rating-editor";
import PatronList from "./patrons/patron-list";

const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div className="container-fluid">
            <h1>Restaurant Rating Database</h1>
            <HashRouter>
                <Route path={["/patrons", "/"]} exact={true}>
                    <PatronList/>
                </Route>
                <Route path="/patrons/:id" exact={true}>
                    <PatronFormEditor/>
                </Route>
                <Route path={["/restaurants", "/"]} exact={true}>
                    <RestaurantList/>
                </Route>
                <Route path="/restaurants/:id" exact={true}>
                    <RestaurantFormEditor/>
                </Route>
                <Route path={["/ratings", "/"]} exact={true}>
                    <RatingList/>
                </Route>
                <Route path="/ratings/:id" exact={true}>
                    <RatingFormEditor/>
                </Route>
                <Route path={["/ratings/restaurant/:restaurantId/ratings"]} exact={true}>
                    <RatingListForRestaurant/>
                </Route>
                <Route path={["/ratings/patron/:patronId/ratings"]} exact={true}>
                    <RatingListForPatron/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;