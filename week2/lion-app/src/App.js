import React from 'react';
import logo from './logo.svg';
import './App.css';




class WorldClock extends React.Component {

    constructor(props) {
      super(props)
      this. state = {
        hour: this.props.time,
        minute: 0
      }
  
    setInterval(() => {
      this.setState((state)=>(
      state.minute === 59
      ?{hour: state.hour + 1 , minute: 0}
      :{minute: state.minute+1}
      ))
    }, 100);
  }

  

  render() {
    return (
      <div className={"WorldClock"}> 
      <h2>도시: {this.props.city}</h2>
      <p>시간: {this.state.hour}시 {this.state.minute}분</p>
    </div>
    )
  }
}

function App() {
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['LA', 17],
    ['부산', 10]
  ]

  const WorldClockList = cityTimeData.map((citytime, index)=>
      <WorldClock city={citytime[0]} time={citytime[1]}/>
  )

  return (
    <div className="App">
      <h1 className="myStyle">안녕하세요</h1>
      <div className={'post'}>
        첫 게시글 입니다.
      </div>
      {WorldClockList}
    </div>

  );
}

export default App;
