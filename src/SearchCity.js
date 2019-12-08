import React from 'react';
import './App.css';

const SearchCity = (props) => {
    return (
        <form className="container" onSubmit={props.submit}>
            <div className="row mb-5 px-5">
                <div className="col-9">
                    <input type="text" className='w-75 h-100 px-2 input-font-size' value={props.value} onChange={props.change} placeholder="Proszę wpisać miasto..."/>
                </div>
                <div className="col-3">
                    <button className='btn btn-primary btn-lg'>Sprawdź pogodę</button>
                </div>
            </div>
        </form>
    );
}

export default SearchCity;