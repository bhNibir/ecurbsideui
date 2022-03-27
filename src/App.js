import { SnackbarProvider } from "notistack";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <AllRoutes />
      </SnackbarProvider>
    </div>
  );
}

export default App;
