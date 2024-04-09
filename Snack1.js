import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div>
      <h2>Chocolate Chip Cookies</h2>
      <p>Delicious chocolate chip cookies made with the finest ingredients.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack1;
