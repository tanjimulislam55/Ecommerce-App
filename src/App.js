import { ProductContainer, Navbar, Cart } from './components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Josefin Sans',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Switch>
            <Route exact path="/">
              <ProductContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Navbar />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
