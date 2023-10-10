import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./themes/global";
import { Router } from "./routes/router";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
