import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useSnackbar } from "notistack";
import { AuthProvider } from "./context/AuthProvider";
import AllRoutes from "./routes/AllRoutes";

const httpLink = createHttpLink({
  // uri: "http://127.0.0.1:8000/graphql/",
  uri: "https://ecurbsideapi.fly.dev/graphql/",
});

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const showErrorMessage = (message) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      variant: "error",
    });
  };

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `JWT ${token}` : "",
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // if (graphQLErrors) {
    //   graphQLErrors.forEach(({ message, locations, path }) => {
    //     console.log(
    //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    //     );
    //     showErrorMessage(message);
    //   });
    // }

    if (networkError) {
      showErrorMessage(networkError.message);
      console.log(`Network error: ${networkError}`);
    }
  });

  const client = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthProvider>
          <AllRoutes />
        </AuthProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
