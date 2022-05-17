import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	useEffect(() => {
		fetch('http://localhost:4000/', {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({
				query : `query {
          allPersons{
            name
            phone
          }
        }`
			})
		})
			.then((res) => res.json())
			.then((res) => {
				console.log('Soy la respuesta del fetch', res);
			});
	});

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>GraphQl + React!</p>

				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
					{' | '}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
