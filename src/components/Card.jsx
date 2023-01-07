import React from 'react'

const Carsd = ({ name, number, date1, date2, cvc }) => {
  return (
    <div>
      <p>Number: {number} </p>
      <p>Name: {name} </p>
      <p>Date:  {date1}  {date2} </p>
      {/* <p>{date2} </p> */}
      <p>CVC: {cvc} </p>
    </div>
  )
}

export default Carsd
