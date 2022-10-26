import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from './Store';
import { Badge } from 'primereact/badge';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SignInScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Pocart</Navbar.Brand>
              </LinkContainer>
              <Nav >
                <Link to="/cart" className="nav-link" >
                  <i
                    className="pi pi-shopping-cart p-text-secondary p-overlay-badge"
                    style={{
                      fontSize: '1.5rem',
                      color: 'white',
          
                    }}
                  >
                    {cart.cartItems.length > 0 && (
                      <Badge
                        value={cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                        size="small"
                        severity="danger"
                      ></Badge>
                    )}
                  </i>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved.</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
