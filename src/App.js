
import './App.css';
import { useState } from 'react';

function App() {
  const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  const [따봉, 따봉변경] = useState(0);

  const 함수 = () => {
    따봉변경(따봉 + 1);
  }

  const 제목변경 = () => {
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }

  const 리스트정렬 = () => {
    let _글제목 = [...글제목];
    글제목변경(_글제목.sort());
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button onClick={ 리스트정렬 }>가나다순 정렬</button>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ 함수 }>👍</span> { 따봉 }</h4>
        <p>2월 17일 발행</p>
        <button onClick={ 제목변경 }>글수정</button>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
