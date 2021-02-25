import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
            {/* Main Routes */}
            <Route exact path='/' component={ () => ( <div>Home</div> ) } />
            <Route exact path='/portfolio' component={ () => ( <div>Portfolio</div> ) } />
            <Route exact path='/about' component={ () => ( <div>About </div> ) } />
            <Route exact path='/contact' component={ () => ( <div>Contact</div> ) } />
        </Switch>
      </ThemeProvider>
      </BrowserRouter>
  )
}

export default App;
