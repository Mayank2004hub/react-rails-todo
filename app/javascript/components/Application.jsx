import React from "react";
import {AlertProvider} from '../context/alert'
import {LoaderProvider} from '../context/loader'
import {createBrowserHistory} from 'history'
import {Router} from 'react-router'
import App from './App'

const history = createBrowserHistory();

const Application = () => <AlertProvider>
	<LoaderProvider>
		<Router history={history}>
			<App/>
		</Router>
	</LoaderProvider>
</AlertProvider>

export default Application
