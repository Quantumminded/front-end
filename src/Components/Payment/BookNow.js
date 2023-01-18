import React, { useState } from 'react';

function BookNow({ card }) {
  console.log(card)
    const [error, setError] = useState(null);

  const handleClick = (card) => {
    fetch("https://super-secret-backend.onrender.com/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
        
      }),
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(json => {
            throw new Error(json.error);
          });
        }
        return res.json();
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch(error => {
        setError(error);
      });
  }
  return (
    <div className="h-12 w-40 text-center float-left bg-y2 hover:bg-b2 text-b2 hover:text-y2 text-xl font-bold p-2 m-2 rounded-full -mt-2 shadow-lg">
      <button onClick={() => handleClick(card)}>Checkout</button>
      {error && <p>{error.message}</p>}
    </div>
  )
}

export default BookNow