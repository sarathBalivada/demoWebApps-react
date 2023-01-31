import { createContext, useContext, useState } from "react";

 
const initialstate = 10;
const context = createContext(initialstate);

const Context = () => {
   
    const [ state, setState ] = useState(initialstate);
    const obj = { state: state, setState: setState };
  return (
    <div>
        <context.Provider value = {obj}>
        <Child />
        </context.Provider>
      
    </div>
  )
}

const Child = () => {
   
        const { state, setState } = useContext(context);
        console.log(  { state, setState }  );

        const increment = () => {
            setState(state + 1);
        }

        
        const dicrement = () => {
            setState(state - 1);
        }
    return (
            <>
            <button onClick={increment}>increment</button>
            <button onClick={dicrement}>dicrement</button>
            {state};
            </>
    )
}


export default Context
