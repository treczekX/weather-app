import React from 'react';
import './App.css';

const SearchCity = (props) => {
    return (
        <form onSubmit={props.submit}>
                    <input type="text" value={props.value} onChange={props.change} placeholder="Proszę wpisać miasto..."/>
                    <button>Sprawdź pogodę</button>
        </form>
    );
}

export default SearchCity;