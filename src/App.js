/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [writeTitle, tranceTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '인덕원 등갈비 맛집']);
  let [like, likeTrance] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={()=>{tranceTitle(writeTitle =['여자 코트 추천'])}}>버튼</button>
      <div className="list">
        <h3> {writeTitle[0]} <span onClick={()=>{ likeTrance(like + 1) }}>❤</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {writeTitle[1]} </h3>
        <p>2월 12일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {writeTitle[2]} </h3>
        <p>2월 05일 발행</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
