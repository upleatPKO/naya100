import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => props.bg === 'blue' ? 'white' : 'black'};
  padding: 10px;
`

let Box = styled.div`
  background: gray;
  padding: 20px;
`

function DetailPage({ shoes }) {
  const { id } = useParams();
  const curShoes = shoes.find(e => e.id === id);
  const [alert, setAlert] = useState(true);
  const [num, setNum] = useState('');

  useEffect(() => {
    // let hideAlert = setTimeout(() => { setAlert( setAlert(false) )}, 2000);

    if (isNaN(num) === true) {
      console.log('숫자만 입력하세요')
    }

    // return () => { //unmoount시 1회 출력
    //   clearTimeout(hideAlert);
    // }
  }, [num])

  return (
    <div className="container">
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>

      {
        alert === true &&
        <div className='alert alert-warning'>
          2초이내 구매시 할인
        </div>
      }

      <input onChange={(e) => { setNum(e.target.value) }} />

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${ parseInt(id) + 1 }.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ shoes[id].title }</h4>
          <p>{ shoes[id].content }</p>
          <p>{ shoes[id].price }원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default DetailPage;