import React, { useState } from 'react';
import Card from './Card';
import './form.css';

const Form = (props) => {
    const [name, setName] = useState(``);
    const [number, setNumber] = useState(``);
    const [date1, setDate1] = useState(``);
    const [date2, setDate2] = useState(``);
    const [err, setErr] = useState(false);
    const [cvc, setCvc] = useState(``);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length == 0 || number.length == 0 || typeof cvc != 'number') {
            setErr(true);
        }

    }



    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="" style={{ color: "black", marginRight: "220px" }}>CARDHOLDER NAME</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="e.g. Jane Appleseed" />
                {(err && name.length <= 0) ? <label className="warn" htmlFor="">Cardholder name required</label> : ""}

            </div>

            <div>
                <label htmlFor="" style={{ color: "black", marginRight: "259px" }}>CARD NUMBER</label>
                <input type="text" value={number} placeholder="e.g. 1234 5678 9123 000" name="number" onChange={e => setNumber(e.target.value)} />

                {(err && number.length <= 0) ? <label className="warn" htmlFor="">Card number required</label> : ""}

            </div>
            <div className='date-cvc' style={{ display: "flex", flexDirection: "row", justifyContent: "spaceBetween", marginLeft: "15%" }} >
                <div className="date" style={{ float: "left", marginLeft: "30%" }}>
                    <label htmlFor="" style={{ color: "black", marginRight: "0px" }} >EXP. DATE(MM/YY)</label>
                    <input type="text" name="date1" value={date1} onChange={e => setDate1(e.target.value)} placeholder='MM' style={{ width: "50px", marginRight: "4px" }} />
                    <input type="text" name='date2' value={date2} onChange={e => setDate2(e.target.value)} placeholder="YY" style={{ width: "50px", marginLeft: "2px" }} />
                </div >
                <div className="cvc" style={{ marginLeft: "-20px" }}>
                    <label htmlFor="" style={{ color: "black" }}>CVC</label>
                    <input type="text" value={cvc} onChange={e => setCvc(e.target.value)} name="cvc" placeholder='e.g. 123' style={{ padding: "4% 20%" }} />
                    {(err && isNaN(cvc)) ? <label htmlFor="">CVC must be numberic</label> : ""}
                </div>
            </div>

            <div>
                <button style={{ backgroundColor: "#220930", color: "white", borderRadius: "15px" }} type="submit" >Confirm</button>
            </div>
        </form>

    )
}



export default Form
