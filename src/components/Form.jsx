import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [name, setName] = useState(``);
    const [number, setNumber] = useState(``);
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length == 0 || number.length == 0) {
            setErr(true);
        }
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="" style={{ color: "black", marginRight: "220px" }}>CARDHOLDER NAME</label>
                <input type="text" onChange={e => setName(e.target.value)} />
                {(err && name.length <= 0) ? <label className="warn" htmlFor="">Cardholder name required</label> : ""}

            </div>

            <div>
                <label htmlFor="" style={{ color: "black", marginRight: "259px" }}>CARD NUMBER</label>
                <input type="text" onChange={e => setNumber(e.target.value)} />

                {(err && number.length <= 0) ? <label className="warn" htmlFor="">Card number required</label> : ""}

            </div>
            <div className='date-cvc' style={{ display: "inline" }} >
                <div className="date">
                    <label htmlFor="" style={{ color: "black", marginRight: "220px" }} >EXP. DATE(MM/YY)</label>
                    <input type="number" min="1" max="12" placeholder='MM' />
                    <input type="text" placeholder="YY" />
                </div >
                <div className="cvc">
                    <label htmlFor="" style={{ color: "black" }}>CVC</label>
                    <input type="text" placeholder='e.g. 123' />``
                </div>
            </div>

            <div>
                <button>Confirm</button>
            </div>
        </form>

    )
}

export default Form
