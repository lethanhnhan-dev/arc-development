import React from "react";
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/ui/Home";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/services"
						component={() => <div>Services</div>}
					/>
					<Route
						exact
						path="/customsoftware"
						component={() => <div>Custom Software</div>}
					/>
					<Route
						exact
						path="/mobileapps"
						component={() => <div>Mobile App</div>}
					/>
					<Route
						exact
						path="/websites"
						component={() => <div>Website</div>}
					/>
					<Route
						exact
						path="/revolution"
						component={() => <div>Revolution</div>}
					/>
					<Route
						exact
						path="/about"
						component={() => <div>About</div>}
					/>
					<Route
						exact
						path="/contact"
						component={() => <div>Contact</div>}
					/>
					<Route
						exact
						path="/estimate"
						component={() => <div>Estimate</div>}
					/>
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
