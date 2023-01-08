import { Color } from "./utils/util";
import { ThemeProvider } from "styled-components";
import AppRouter from "./Routes/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ThemeProvider theme={Color}>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
