import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Helloword from './pages/Helloword';
import Navigation from './pages/Navigation';

export default class Routes extends Component<{}> {
	render() {
		return (
			<Router>
				<Stack key="root" hideNavBar={true}>
					<Scene key="login" component={Login} title="Login" initial={true} />
					<Scene key="signup" component={Signup} title="Register" />
					<Scene key="helloword" component={Helloword} title="Halaman Helloword" />
					<Scene key="navigasi" component={Navigation} title="Halaman Navigasi" />
				</Stack>
			</Router>
		)
	}
}