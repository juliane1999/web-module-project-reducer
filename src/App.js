import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index'
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {addOne,applyNumber} from './actions/index'

function App() {
  const [state,dispatch] = useReducer(reducer, initialState)

  // const onClick = () => {
  //     dispatch(CalcButton);
  // }

  // const addClick = () => {
  //   dispatch(addOne(1));
  // }

  const applyClick = () => {
    dispatch(applyNumber());
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
              <CalcButton onClick={applyClick}  value={"M+"}/>
              <CalcButton onClick={applyClick}  value={"MR"}/>
              <CalcButton onClick={applyClick}  value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={applyClick}  value={1}/>
              <CalcButton onClick={applyClick}  value={2}/>
              <CalcButton onClick={applyClick}  value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={applyClick}  value={4}/>
              <CalcButton onClick={applyClick}  value={5}/>
              <CalcButton onClick={applyClick}  value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={applyClick}  value={7}/>
              <CalcButton onClick={applyClick}  value={8}/>
              <CalcButton onClick={applyClick}  value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={applyClick}  value={"+"}/>
              <CalcButton onClick={applyClick}  value={"*"}/>
              <CalcButton onClick={applyClick}  value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={applyClick}  value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
