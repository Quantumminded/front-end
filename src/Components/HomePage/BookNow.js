import React, { useState } from 'react';

function BookNow() {
    const [error, setError] = useState(null);

  const handleClick = () => {
    fetch("http://localhost:3001/create-checkout-session", {
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
    <button className="h-12 w-40 float-left bg-y2 hover:bg-b2 text-b2 hover:text-y2 text-xl font-bold p-2 m-2 rounded-full -mt-2 shadow-lg">
      <button onClick={handleClick}>Checkout</button>
      {error && <p>{error.message}</p>}
    </button>
  )
}

export default BookNow