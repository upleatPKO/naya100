import { Container, Row } from 'react-bootstrap';
import ShoseCard from '../components/ShoseCard';

function MainPage({shoes}) {
  return (
    <>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {
            shoes.map((e, i) => {
              return (
                <ShoseCard key={ i } shoes={ shoes } i={ i } />
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default MainPage;