import React, { useState } from "react";
import styled from "styled-components";

const Reviews = ({ reviews, createReview }) => {
  const [addReview, setAddReview] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    createReview(review, rating);
    setAddReview(false);
  };

  return (
    <Container>
      <h2>Reviews</h2>
      <h3>Leave a Review?</h3>
      {addReview ? (
        <Button onClick={() => setAddReview(false)}>Back</Button>
      ) : (
        <Button onClick={() => setAddReview(true)}>Add</Button>
      )}
      {addReview ? (
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="review">Your Review</Label>
            <Textarea
              rows="3"
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="title">Rating: {rating}</Label>
            <input
              type="range"
              min="0"
              max="5"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button type="submit">Submit</Button>
          </FormField>
        </form>
      ) : null}
      {reviews.map((review) => {
        return (
          <Rater key={review.id}>
            <h3>{review.user.username} says:</h3>
            <Comment>
              {review.rating}/5 - {review.content}
            </Comment>
            <Divider />
          </Rater>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  margin: 40px auto;
  padding: 20px;
  width: 75%;
  background-color: rgba(239, 239, 239);
  border-radius: 6px;
`;
const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
  resize: none;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100px;
  background-color: rgba(58, 142, 216, 1);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
// const Input = styled.input`
//   border-radius: 6px;
//   border: 1px solid transparent;
//   border-color: #dbdbdb;
//   -webkit-appearance: none;
//   max-width: 100%;
//   width: 100%;
//   font-size: 1rem;
//   line-height: 1.5;
//   padding: 4px;
// `;

const Rater = styled.div`
  margin-left: 20px;
`;
const Comment = styled.p`
  margin-left: 20px;
`;
const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Reviews;
