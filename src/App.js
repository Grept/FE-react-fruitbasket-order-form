import React, {useState} from 'react';
import './App.css';
import {useForm} from 'react-hook-form'

import Button from "./components/Button";
import Section from "./components/Section";

function App() {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const [state, setState] = useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0,
    })

    // Destructure state fields
    const {strawberry, banana, apple, kiwi} = state

    function count(e) {
        // Check if we need to add or substract
        const operation = e.target.firstChild.data

        // Check operator and FIRST add or substract, before assigning
        const newValue = operation === "+" ? ++e.target.value : --e.target.value;
        setState({
            ...state,
            // Make sure not to count below 0
            [e.target.name]: (newValue < 0) ? 0 : newValue
        })
    }

    function onSubmit(data) {
        // Combine data and state in new object
        console.log({...data, order: {...state}})
    }

    return (
        <main>
            {/*    FRUIT PICKER    */}

            <h1>Fruitmand bezorgservice</h1>
            <Section
                name="strawberry"
                onClick={count}
                value={strawberry}
            >
            </Section>

            <Section
                name="banana"
                onClick={count}
                value={banana}
            >
            </Section>

            <Section
                name="apple"
                onClick={count}
                value={apple}
            >
            </Section>

            <Section
                name="kiwi"
                onClick={count}
                value={kiwi}
            >
            </Section>


            <Button
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
            </Button>


            {/*    FORM    */}

            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/*VOORNAAM*/}
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

                    {/*ACHTERNAAM*/}
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

                    {/*LEEFTIJD*/}
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

                    {/*POSTCODE*/}
                    <label htmlFor="postCode">
                        Postcode
                        <input
                            type="text"
                            {...register("postCode", {
                                pattern: {
                                    // Allow 4 numbers, optional whitespace and 2 letters (not case-sensitive)
                                    value: /([0-9]{4}\s?[A-Z]{2})/i,
                                    message: "Voer een geldige postcode in."
                                },
                                required: "Voer een postcode in."
                            })}
                        />
                    </label>
                    {errors.postCode && <p className="error">{errors.postCode.message}</p>}

                    {/*BEZORGINGFREQUENTIE*/}
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

                    {/*BEZORGMOMENT*/}
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

                    {/*OPMERKING*/}
                    <label htmlFor="comment">
                        <textarea
                            {...register("comment")}
                            cols="30"
                            rows="10"
                        >

                        </textarea>
                    </label>

                    {/*VOORWAARDEN*/}
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

                    <button type="submit">VERZENDEN</button>
                </form>
            </section>


        </main>
    );
}

export default App;
