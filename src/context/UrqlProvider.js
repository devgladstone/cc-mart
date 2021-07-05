import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://cc-mart-graphql.herokuapp.com/v1/graphql',
});

const UrqlProvider = ({children}) => (
  <Provider value={client}>
    {children}
  </Provider>
);

export default UrqlProvider
