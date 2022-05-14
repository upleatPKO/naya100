
import './App.css';
import { useState } from 'react';

function App() {
  const [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  const [따봉, 따봉변경] = useState([0, 0, 0]);
  const [modal, setmodal] = useState(false);
  const [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState([...글제목]);

  const 제목변경 = () => {
    let _글제목 = [...글제목];
    _글제목[0] = '여자 코트 추천';
    글제목변경(_글제목);
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
      <button onClick={리스트정렬}>가나다순 정렬</button>

      {
        글제목.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setmodal(!modal);
                setTitle(i);
              }}
              >
                {글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();

                  let _따봉 = [...따봉];
                  _따봉[i] = _따봉[i] + 1;
                  따봉변경(_따봉);
                }}
                >
                  👍
                </span>
                {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => { 
                let _글제목 = [...글제목];
                _글제목.splice(i, 1);
                글제목변경(_글제목);
              }}
              >
                삭제
              </button>
            </div>
          )
        })
      }
      <input type="text" onChange={((e) => {
        입력값변경(e.target.value);
      })}
      />
      <button onClick={() => {
        let _글제목 = [입력값, ...글제목];
        글제목변경(_글제목);
      }}
      >
        적용
      </button>

      {
        modal === true
          ? <Modal 글제목={글제목} 제목변경={제목변경} title={title} />
          : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]} </h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.제목변경}>글수정</button>
    </div>
  )
}

export default App;
