import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import likeReducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const store = createStore(likeReducer);

const LikeCounter = () => {
  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.likeCount);

  const handleIncrement = () => {
    dispatch(incrementLike());
  };

  const handleDecrement = () => {
    dispatch(decrementLike());
  };

  return (
    <div>
      <h2>Like Counter</h2>
      <p>Like Count: {likeCount}</p>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <LikeCounter />
    </Provider>
  );
};

export default App;

