import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const ALL_PERSONS = gql`
	query {
		allPersons {
			name
			phone
			address {
				street
				city
			}
		}
	}
`;

function App() {
	const { data, error, loading } = useQuery(ALL_PERSONS);
	// console.log(result);// lo mas importante: data, error y loading,

	if (error) return <span style="color: red">{error}</span>;
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{
					loading ? <p>Loading...</p> :
          <>
					<p>GraphQl + React!</p>
          {data && data.allPersons.map(person => person.name).join(", ")}
          
          </>
          }

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
