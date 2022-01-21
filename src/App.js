/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [writeTitle, tranceTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '인덕원 등갈비 맛집']);
  let [like, likeTrance] = useState(0);
  let [modal, modalTrance] = useState(false);

  function changeTitle() {
    let newArray = [...writeTitle];
    newArray[0] = '여자 코트 추천'
    tranceTitle(newArray);
  }

  function arrayUi(){

    let arrayNew = []
    for (let i = 0; i <3; i++) {
      arrayNew.push(<div>안녕</div>);
      
    }
    return arrayNew
  }



  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      <div className="list">
        <h3> {writeTitle[0]} <span onClick={() => { likeTrance(like + 1) }}>❤</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {writeTitle[1]} </h3>
        <p>2월 12일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={() => { modalTrance(!modal) }}> {writeTitle[2]} </h3>
        <p>2월 05일 발행</p>
        <hr />
      </div>
      {arrayUi()}

      {
        modal === true
          ? <Modal></Modal>
          : null
      }

      {
        writeTitle.map(function (i) {
          return (
            <div className="list">
              <h3> {i} </h3>
              <p>2월 12일 발행</p>
              <hr />
            </div>
          )
        })

      }



    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
