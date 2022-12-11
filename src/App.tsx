import { Color } from "./utils/util";
import { ThemeProvider } from "styled-components";
import AppRouter from "./Routes/Router";

function App() {
  return (
    <ThemeProvider theme={Color}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
