import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-block: 3rem;
  gap: 1.5rem;
  line-height: 1.5;
  background: hsl(213, 19%, 18%);
  border-radius: 20px;
  margin: 1em auto;
  padding: 3em 2em;
  color: hsl(217, 12%, 63%);
  img {
    width: 50%;
  }
  span {
    display: block;
    background: hsl(215, 19%, 30%);
    color: hsl(25, 97%, 53%);
    width: fit-content;
    padding-inline: 0.9em;
    border-radius: 100vmax;
  }
  h2 {
    color: white;
  }
  p {
    color: hsl(217, 12%, 63%);
  }
  .circle {
    width: 70px;
    aspect-ratio: 1;
    background: hsl(213, 19%, 20%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle-wrapper {
    display: flex;
    justify-content: space-between;
    padding-block: 2rem;
    gap: 1rem;
    .circle {
      &:hover {
        background: hsl(216, 12%, 54%);
        color: white;
      }
    }
  }
  input {
    display: none;
  }
  input:checked + label {
    background: hsl(25, 97%, 53%);
    color: white;
  }
  input:checked + label.circle:hover {
    background: hsl(25, 97%, 53%);
  }
  button {
    width: 100%;
    border-radius: 100vmax;
    padding-block: 0.5em;
    letter-spacing: 2px;
    background: hsl(25, 97%, 53%);
    color: white;
    border: none;
    &:hover {
      color: hsl(25, 97%, 53%);
      background: white;
    }
  }
`;

interface IBody {
  score: number;
}

function Rating() {
  const arr = [1, 2, 3, 4, 5];
  const [scoreValue, setScoreValue] = useState(0);
  const [isSent, setIsSent] = useState(false);
  function submit() {
    const body: IBody = { score: scoreValue };
    axios
      .post("/api/rating", body)
      .then((res) => console.log(res.data.score))
      .catch((err) => console.log(err));
    setIsSent(true);
  }
  return (
    <>
      {isSent ? (
        <Wrapper>
          <img src="./images/thankyou.svg" alt="" />
          <span>You Selected {scoreValue} out of 5</span>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. if you ever need
            more support. don't hesitate to get in touch!
          </p>
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="circle">
            <img src="./images/star.png" alt="" />
          </div>
          <p></p>
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering
          </p>
          <div className="circle-wrapper">
            {arr.map((score, idx) => {
              return (
                <div key={idx}>
                  <input
                    id={`rating${idx}`}
                    value={score}
                    type="radio"
                    name="rating"
                  />
                  <label
                    htmlFor={`rating${idx}`}
                    className="circle"
                    onClick={() => {
                      setScoreValue(score);
                    }}
                  >
                    {score}
                  </label>
                </div>
              );
            })}
          </div>
          <button onClick={submit}>SUBMIT</button>
        </Wrapper>
      )}
    </>
  );
}

export default Rating;
