import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Counter from "./Counter";
import Form from "./Form";
import Greetings from "./Greeting";
import PropCounter from "./PropCounter";
import Reducer from "./Reducer";
import { RootState } from "./ReduxPro/config";
import { increase, decrease, increaseBy } from "./ReduxPro/counter";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSumbit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  // proReducer
  const dispatch = useDispatch();
  // config에서 export한 tpye을 작성해줘야만 한다.
  // count는 :number가 필요하지만 알아서 유추해주니 무시해도 된다.
  const count = useSelector((state: RootState) => state.counter.count);
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  return (
    <div>
      <Greetings name="Hello" onClick={onClick} />
      <Counter />
      <Form onSubmit={onSumbit} />
      <Reducer />
      <PropCounter
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
      />
    </div>
  );
};

export default App;
