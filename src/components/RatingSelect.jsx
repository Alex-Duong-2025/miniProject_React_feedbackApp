import React from "react";
import { useState } from "react";

function RatingSelect({ select }) {
  const [ratingSelected, setRatingSelected] = useState(10);

  const handleChange = (e) => {
    setRatingSelected(+e.target.value);
    // this is to pass the input value to the feedback form
    select(+e.target.value);
  };

  return (
    <div>
      <ul className="rating">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={ratingSelected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RatingSelect;
