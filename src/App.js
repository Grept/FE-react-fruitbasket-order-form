import React, {useState} from 'react';
import './App.css';

function App() {
    // const [strawberry, setStrawberry] = useState(0)

    const [state, setState] = useState({
        strawberry: 0,
        banana: 0,
        apples: 0,
        kiwis: 0
    })

    const {strawberry, banana, apples, kiwis} = state

    function substract (e) {
        const newValue = --e.target.value
        setState({
            ...state,
            [e.target.name]: newValue
        })
    }

    function add(e) {
        const newValue = ++e.target.value
        setState({
            ...state,
            [e.target.name]: newValue
        })
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <p>🍓Aardbeien</p>
                <button
                    type="button"
                    name="strawberry"
                    onClick={substract}
                    value={strawberry}
                >-</button>
                <p>{strawberry}</p>
                <button
                    type="button"
                    name="strawberry"
                    onClick={add}
                    value={strawberry}
                >+</button>
            </section>

            <section>
                <p>🍌Banana</p>
                <button
                    type="button"
                    name="banana"
                    onClick={substract}
                    value={banana}
                >-</button>
                <p>{banana}</p>
                <button
                    type="button"
                    name="banana"
                    onClick={add}
                    value={banana}
                >+</button>
            </section>


        </>
    );
}

export default App;
