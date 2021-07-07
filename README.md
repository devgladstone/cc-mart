# CC Mart

## Problem: Building basic e-commerce flow

This solution consists of a front-end heavy React app and a GraphQL API for the backend. I focused a lot on the front-end UI by utilizing Tailwind and it's component library, and used React to handle state management and DOM manipulation. For the sake of time, admin and users were ignored, and data was exchanged directly between the client and database, which I set up as a GraphQL API by using Hasura, but with additional time I would implement an auth server for users and set up permissions on Hasura to control access, as well as other features mentioned later.

## Getting Started

### Front-end - [CC Mart](https://clever-babbage-62ec2b.netlify.app/) (Hosted on Netlify)

- Clone repo
- `npm install`
- `npm start`
- Use [Hasura Console](https://cc-mart-graphql.herokuapp.com/console/api/api-explorer) to make changes to database and schema

Dependencies:
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Declarative routing for React
- [urql](https://github.com/FormidableLabs/urql) - GraphQL client to facilitate queries to GraphQL and caching
- [tailwind](https://tailwindcss.com/) - A utility-first CSS framework; also TailwindUI for component library

## Future improvements/features
- Client
	- Users
		- Implementing authentication and authorization for admin and users
		- Implementing users and user data
	- Forms
		- `react-hook-forms` - helps with validation and re-rendering speed
	- Browse items user page
		- Individual item page
		- Pagination
		- Filter by categories
		- Expand description
		- Abstract modal to incorporate different actions - create, update, delete, and errors
	- Add items page
		- Add image upload functionality
	- Cart
		- Persisting cart information
	- Checkout
		- Encrypting billing information
		- Adding other payment options like PayPal
		- Implementing processing of payment on submit
- Backend
	- Adding roles and permissions in Hasura to controll access to data based on the user
	- Implementing an auth server
