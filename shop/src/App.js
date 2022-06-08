import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import data from './data.js';
import Cart from './pages/Cart';

function App() {
	let [shoes, setShoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/0') }}>상세페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <MainPage shoes={ shoes } /> } />
        <Route path="/detail/:id" element={ <DetailPage shoes={ shoes } /> } />
        <Route path="/about" element={ <AboutPage /> } >
          <Route path="member" element={ <div>멤버임</div> } />
          <Route path="location" element={ <div>위치정보임</div> } />
        </Route>
        <Route path="/event" element={ <EventPage /> } >
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
        </Route>
        <Route path="*" element={ <div>없는 페이지임</div>}></Route>
        <Route path="/cart" element={ <Cart /> } />
      </Routes>

    </div>
  );
}

export default App;
