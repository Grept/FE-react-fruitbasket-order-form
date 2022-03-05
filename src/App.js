import React, {useState} from 'react';
import './App.css';
import {useForm} from 'react-hook-form'

function App() {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const [state, setState] = useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0,
        disabled: false
    })

    const {strawberry, banana, apple, kiwi, disabled} = state

    function substract(e) {
        const newValue = --e.target.value
        setState({
            ...state,
            [e.target.name]: (newValue < 0) ? 0 : newValue
        })
    }

    function add(e) {
        const newValue = ++e.target.value
        setState({
            ...state,
            [e.target.name]: newValue
        })
    }

    function onSubmit(data) {
        console.log({...data, ...state})
        // console.log(state)
    }

    return (
        <>
            {/*    FRUIT PICKER    */}

            <h1>Fruitmand bezorgservice</h1>
            <section>
                <p>🍓Strawberry</p>
                <button
                    type="button"
                    name="strawberry"
                    onClick={substract}
                    value={strawberry}
                >-
                </button>
                <p>{strawberry}</p>
                <button
                    type="button"
                    name="strawberry"
                    onClick={add}
                    value={strawberry}
                >+
                </button>
            </section>

            <section>
                <p>🍌Banana</p>
                <button
                    type="button"
                    name="banana"
                    onClick={substract}
                    value={banana}
                >-
                </button>
                <p>{banana}</p>
                <button
                    type="button"
                    name="banana"
                    onClick={add}
                    value={banana}
                >+
                </button>
            </section>

            <section>
                <p>🍏Apple</p>
                <button
                    type="button"
                    name="apple"
                    onClick={substract}
                    value={apple}
                >-
                </button>
                <p>{apple}</p>
                <button
                    type="button"
                    name="apple"
                    onClick={add}
                    value={apple}
                >+
                </button>
            </section>

            <section>
                <p>🥝Kiwi</p>
                <button
                    type="button"
                    name="kiwi"
                    onClick={substract}
                    value={kiwi}
                >-
                </button>
                <p>{kiwi}</p>
                <button
                    type="button"
                    name="kiwi"
                    onClick={add}
                    value={kiwi}
                >+
                </button>
            </section>

            <button
                type="button"
                onClick={() => {
                    setState({
                        strawberry: 0,
                        banana: 0,
                        apple: 0,
                        kiwi: 0
                    })
                }}
            >RESET
            </button>


            {/*    FORM    */}

            <section>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="firstName">
                        Voornaam:
                        <input
                            type="text"
                            {...register("firstName", {
                                minLength: {
                                    value: 2,
                                    message: "Naam moet uit minimaal 2 karakters bestaan."
                                },
                                required: "Naam-veld mag niet leeg zijn."
                            })}
                        />
                    </label>
                    {errors.firstName && <p className="error">{errors.firstName.message}</p>}

                    <label htmlFor="lastName">
                        Achternaam
                        <input
                            type="text"
                            {...register("lastName", {
                                minLength: {
                                    value: 2,
                                    message: "Achternaam moet uit minimaal 2 karakters bestaan."
                                },
                                required: "Achternaam-veld mag niet leeg zijn."
                            })}
                        />
                    </label>
                    {errors.lastName && <p className="error">{errors.lastName.message}</p>}

                    <label htmlFor="age">
                        Leeftijd
                        <input
                            type="number"
                            {...register("age", {
                                min: {
                                    value: 16,
                                    message: "Je moet minimaal 16 zij om te kunnen bestellen."
                                },
                                required: "Voer je leeftijd in."
                            })}
                        />
                    </label>
                    {errors.age && <p className="error">{errors.age.message}</p>}

                    <label htmlFor="postCode">
                        Postcode
                        <input
                            type="text"
                            {...register("postCode", {
                                pattern: {
                                    value: /([0-9]{4}[A-Z]{2})/,
                                    message: "Voer een geldige postcode in."
                                },
                                required: "Voer een postcode in."
                            })}
                        />
                    </label>
                    {errors.postCode && <p className="error">{errors.postCode.message}</p>}

                    <label htmlFor="deliveryFreq">
                        Bezorgfrequentie
                        <select
                            {...register("deliveryFreq")}
                        >
                            <option value="weekly">Iedere week</option>
                            <option value="monthly">Iedere maand</option>
                            <option value="yearly">Ieder jaar</option>
                        </select>
                    </label>

                    <label htmlFor="deliveryMoment">
                        <input
                            type="radio"
                            checked={true}
                            value="dag"
                            {...register("deliveryMoment")}
                        />
                        Overdag

                        <input
                            type="radio"
                            value="avond"
                            {...register("deliveryMoment")}
                        />
                        's Avonds
                    </label>

                    <label htmlFor="comment">
                        <textarea
                            {...register("comment")}
                            cols="30"
                            rows="10"
                        >

                        </textarea>
                    </label>

                    <label htmlFor="termsAgree">
                        <input
                            type="checkbox"
                            {...register("termsAgree", {
                                required: "Ga akkoord met de voorwaarden"
                            })}
                        />
                        Ik ga akkoord met de voorwaarden.
                    </label>
                    {errors.termsAgree && <p className="error">{errors.termsAgree.message}</p>}

                    <button
                        type="submit"
                        disabled={disabled}
                    >
                        Verzend
                    </button>
                </form>
            </section>


        </>
    );
}

export default App;
