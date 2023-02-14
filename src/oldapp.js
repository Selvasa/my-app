import React from 'react'
import { Myconst } from './contaxt';

export const OldApp = (props) => {
    return (
        <Myconst.Consumer>
            {
                (e) => {
                    return (
                        <div>
                            <h4>This is old App {e.count}</h4>
                            <button onClick={e.Increment}>Increment</button>&ensp;
                            <button onClick={e.Decrement}>Increment</button>
                        </div>
                    )
                }
            }
        </Myconst.Consumer>
    )
}


