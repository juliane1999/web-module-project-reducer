import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index'
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {applyNumber,applyOp,clear} from './actions/index'

function App() {
  const [state,dispatch] = useReducer(reducer, initialState);

  // const onClick = () => {
  //     dispatch(CalcButton);
  // }

  // const addClick = () => {
  //   dispatch(addOne(1));
  // }

  const applyNumClick = (number) => {
    dispatch(applyNumber(number));
  }

  const applyOpClick = (operator) => {
    dispatch(applyOp(operator));
  }

  const applyClear = (clearing) => {
    dispatch(clear(clearing));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton  value={"M+"} onClick={() => {applyOpClick("M+")}}/>
              <CalcButton value={"MR"} onClick={() => {applyOpClick("MR")}}/>
              <CalcButton value={"MC"} onClick={() => {applyOpClick("MC")}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {applyNumClick(1)}}/>
              <CalcButton value={2} onClick={() => {applyNumClick(2)}}/>
              <CalcButton value={3} onClick={() => {applyNumClick(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {applyNumClick(4)}}/>
              <CalcButton value={5} onClick={() => {applyNumClick(5)}}/>
              <CalcButton value={6} onClick={() => {applyNumClick(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {applyNumClick(7)}}/>
              <CalcButton value={8} onClick={() => {applyNumClick(8)}}/>
              <CalcButton value={9} onClick={() => {applyNumClick(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {applyOpClick("+")}}/>
              <CalcButton value={"*"} onClick={() => {applyOpClick("*")}}/>
              <CalcButton value={"-"} onClick={() => {applyOpClick("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {applyClear("CE")}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
