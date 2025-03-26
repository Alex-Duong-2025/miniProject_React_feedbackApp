import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
import RatingSelect from "./RatingSelect";
import { useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(7);

  const { addFeedback, feedbackEditState, updateFeedback } =
    useContext(FeedbackContext);

  // everytime, when the edit button is clicked, the state "feedbackEditState" will be populated with the values of the feedback we want to edit (this change triggers the useEffect hook)
  useEffect(() => {
    if (feedbackEditState.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEditState.item.text);
      setRating(feedbackEditState.item.rating);
    }
  }, [feedbackEditState]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText !== "" && newText.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if (feedbackEditState.edit === true) {
        updateFeedback(feedbackEditState.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={setRating} />
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your Feedback"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
