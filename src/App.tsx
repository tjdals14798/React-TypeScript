import React from 'react';
import CounterContainer from './containers/CounterContainer';
// import MyForm from './MyForm';
// import Counter from './Counter';
// import ReducerSample from './ReducerSample';
// import { SampleProvider } from './SampleContext';

function App() {

  // const onSubmit = (form: { name: string; description: string|number }) => {
  //   console.log(form);
  // };

  return (
  <>
  <CounterContainer/>
    {/* <Counter />
    <MyForm onSubmit ={onSubmit}/>
    <SampleProvider>
      <ReducerSample />
    </SampleProvider> */}
  </>
  );
}

export default App;
