import { useState } from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import ShoseCard from '../components/ShoseCard';
import axios from 'axios';
import TabContent from '../components/TabContent';

function MainPage(props) {
  //let [shoes, setShoes] = useState(props.shoes);
  let [tab, setTab] = useState(0);

  return (
    <>
      <div className='main-bg'></div>

      <Container>
        <Row>
          {
            props.shoes.map((e, i) => {
              return (
                <ShoseCard key={i} shoes={props.shoes} i={i} />
              )
            })
          }
        </Row>
      </Container>

      <button onClick={() => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과) => {
            let joinShoes = [...props.shoes, ...결과.data];
            console.log(joinShoes);
            //setShoes(joinShoes);
          })
          .catch(() => {
            console.log('실패함')
          })
      }}>버튼</button>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={ tab } />
    </>
  )
}

export default MainPage;