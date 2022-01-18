import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '인덕원 고기 맛집';


  return (
    <div className="App">
      <div className="black-nav">
        <div style={{fontSize : '30px'}}>개발 Blog</div>
      </div>
      <img src={logo}></img>
      <h4> {posts} </h4>
    </div>
  );
}

export default App;
