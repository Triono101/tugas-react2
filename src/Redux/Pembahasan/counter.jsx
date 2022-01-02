import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { decrementWithCheckingAction, Increment } from "../App/CounterFeatures/actions";


const Counter = () => {
    let {count} = useSelector(state => state.counter)
    let dispatch = useDispatch();

    return(
        <div className="show">
            <div className="display">
                <h2 className="pertama">Tugas React Redux - Counter</h2>

                {/* Metode Biasa */}

                    {/* <button onClick={() => dispatch({type: 'DEC', value: 1})}>-</button>
                    {' '} <span>{count}</span> {' '}
                    <button onClick={() => dispatch({type: 'INC', value: 1})}>+</button> */}

                {/* Metode Action creator  */}

                    {/* <button onClick={() => dispatch(Decrement(1))}>-</button>
                    {' '} <span>{count}</span> {' '}
                    <button onClick={() => dispatch(Increment(1))}>+</button> */}

                {/* Metode Redux Thunk  */}

                <button className="btn123" onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
                {' '}  <span className="count">{count}</span>  {' '}
                <button className="btn123" onClick={() => dispatch(Increment(1))}>+</button>
                
            </div>
        </div>

    )
}

export default Counter;