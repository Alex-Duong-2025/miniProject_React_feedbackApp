import React from "react";

function FeedbackStats({ feedback }) {
  let ratingAvg =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  ratingAvg = ratingAvg.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{`${feedback.length} reviews`}</h4>
      <h4>Average rating: {isNaN(ratingAvg) ? 0 : ratingAvg}</h4>
    </div>
  );
}

export default FeedbackStats;
