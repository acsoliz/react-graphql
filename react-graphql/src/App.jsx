import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import Persons from './Components/Persons';
import PersonForm from './Components/PersonForm';

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
	const { data, error, loading } = useQuery(ALL_PERSONS, {pollInterval:2000});
	//PollIn cada 2'' hara una nueva peticion para ver si huvo un cambio
	// console.log(result);// lo mas importante: data, error y loading,

	if (error) return <span style="color: red">{error}</span>;
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{
					loading ? <p>Loading...</p> :
          <Persons persons={data?.allPersons}/>
          
          }

			
			<PersonForm/>
			</header>
			
		</div>
	);
}

export default App;
