import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEditState, setFeedbackEditState] = useState({
    item: {},
    edit: false,
  });

  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //edit an existing feedback
  const editFeedback = (item) => {
    setFeedbackEditState({
      item,
      edit: true,
    });
  };

  //update a feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { ...item, ...updItem };
        } else {
          return item;
        }
      })
    );
  };

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEditState,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
