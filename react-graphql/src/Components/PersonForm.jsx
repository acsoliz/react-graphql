import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const CREATE_PERSON = gql`
	mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String) {
		addPerson(name: $name, phone: $phone, street: $street, city: $city) {
			name
			phone
			address {
				city
				street
			}
			id
		}
	}
`;

const PersonForm = () => {
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ street, setStreet ] = useState('');
	const [ city, setCity ] = useState('');

	const [ createPerson ] = useMutation(CREATE_PERSON);

	const handleSubmit = (e) => {
		e.preventDefault();

		createPerson({ variables: { name, phone, street, city } });

		setName('');
		setPhone('');
		setStreet('');
		setCity('');
	};
	return (
		<div>
			<h2>Create new Person</h2>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input placeholder="your name.." value={name} onChange={(evt) => setName(evt.target.value)} />
				<br />
				<label>Phone:</label>
				<input placeholder="your phone" value={phone} onChange={(evt) => setPhone(evt.target.value)} />
				<br />
				<label>Street:</label>
				<input placeholder="your street.." value={street} onChange={(evt) => setStreet(evt.target.value)} />
				<br />
				<label>City:</label>
				<input placeholder="your city.." value={city} onChange={(evt) => setCity(evt.target.value)} />
				<br />
				<button>Add Person</button>
			</form>
		</div>
	);
};

export default PersonForm;
