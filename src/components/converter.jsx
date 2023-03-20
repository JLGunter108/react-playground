import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'




export default function Converter() {
    
    const host = 'api.frankfurter.app';
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);
    
    return (
        <div class="container">
            <h2 class="text-center mb-3">Currency Converter</h2>
            <div class="row justify-content-between mb-3">

                <div class="col">
                    <select class="mb-2 col form-control currency">
                    <option>From</option>
                    </select>
                    <input type="text" class="mb-3 form-control" id="input_currency"></input>
                </div>

                <div class="col">
                    <select class="mb-2 col form-control currency">
                    <option>To</option>
                    </select>
                </div>

                <input type="text" class="mb-3 form-control" id="output_currency" readonly></input>
                <button type="button" class="btn btn-success align-self-center" onclick={this.convert()}>Convert</button>

            </div>
        </div>
)}