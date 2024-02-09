import React, { useContext, useState, useEffect } from 'react'
// import styled from 'styled-components'
import { MyContext } from '../context';


function AboutComponent() {
    const [data, setData] = useState(100);
    const {someValue, secValue, A, pokemonData, fetchData} = useContext(MyContext)

    useEffect(() => {
        fetchData()
    }, [])

    console.log(pokemonData);

    return (
        <div>About Component
            <h2> Count : {data}</h2>
            <button style={{margin: "8px"}} onClick={() => setData(data+1)}>
                Increase
            </button>
            <button style={{margin: "8px"}} onClick={() => setData(data-1)}>
                Decrease
            </button>

            <p>Nilai dari Context : {someValue} & {secValue} & {A}</p>
            {/* tanda tanya = opsional chaining  (kalo datanya belum ada, bakal nuggu sampe ada dulu baru muncul) agar tidak error */}
            <h4>Name : {pokemonData?.name}</h4>
            <h4>Name : {pokemonData?.weight}</h4>
        </div>
    )
}

export default AboutComponent