import React from "react";
import './example-1.css';
import axios from 'axios';

axios.create({
    baseURL: 'http://127.0.0.1:3001',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

function Example1() {

    const [value, setValue] = React.useState();
    const [a, setA] = React.useState(0);
    const [b, setB] = React.useState(0);

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'a') {
            setA(value);
        }
        if (name === 'b') {
            setB(value);
        }
        setValue(undefined);
    }

    async function addition() {
        console.log(`${a}` + `${b}`);
        const url = 'https://www.w3schools.com/xml/ajax_info.txt';

        if(a === undefined || b === undefined) return;

        axios.post('http://127.0.0.1:3001/addition', {'a': a, 'b': b})
            .then((response) => {
                console.log(response);
                setValue(response.data.value);
            })
            .catch(function (error) {
                setValue(undefined)
                console.log(error);
            });
    }

    return (
        <div>
            <h3>Addition operation</h3>
            <div className="addition">
                <p className="row"><label className="col-4">Input a:</label><input className="col-6" name="a" value={a} onChange={ handleInputChange } type="number" /></p>
                <p className="row"><label className="col-4">Input b:</label><input className="col-6" name="b" value={b} onChange={ handleInputChange } type="number" /></p>
                <p className="row"><div className="col-4"> </div><button className="col-4" onClick={addition}>Calculate</button><div className="col-4"> </div></p>
                <p className="row" hidden={value === undefined}>Sum of {a} + {b} is: {value}</p>
            </div>
        </div>
    );
}

export default Example1;