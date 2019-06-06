import React, { Component } from "react";
import { Router, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from "history";
import DataContainer from "./DataContainer";

const history = createBrowserHistory();

class AppContainer extends Component {

	render() {
		return(
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={DataContainer} />
				</Switch>
			</Router>
		)
	}
}

export default AppContainer
