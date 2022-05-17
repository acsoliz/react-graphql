import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloClient, HttpLink, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	cache : new InMemoryCache(),
	link  : new HttpLink({
		uri : 'http://localhost:4000' // debera ir la variables de entorno
	})
});

const query = gql`
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

// query recibe un objeto que tiene la propiedad query
client.query({ query: query }).then((res) => {
	console.log(res.data);
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
