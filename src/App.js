import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    //ACTION CREATOR
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" }); //DISPATCH Y ACTION
  };

  const addTen = () => {
    dispatch({ type: "INCREMENTTEN", payload: 10 });
  };

  return (
    <>
      <h1>COUNTER APP</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={addTen}>INCREMENT 10</button>
    </>
  );
}

export default App;
