import React from 'react';
import './App.css';
import Main from './pages/Main';
import Upload from './pages/Upload';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path='/' exact component={Main}/>
				<Route path='/upload' component={Upload}/>
				<Route path='/:videoId' component={Main}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
