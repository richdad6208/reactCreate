import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: 500px;
  line-height: 1.5;
  background: hsl(213, 19%, 18%);
  border-radius: 20px;
  padding: 1.5em 3em;
  color: hsl(217, 12%, 63%);
  h1 {
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

function Rating() {
  const arr = [1, 2, 3, 4, 5];
  const [scoreValue, setScoreValue] = useState(0);
  function submit() {
    const body: number = scoreValue;
    axios.get("/api/rating", body).then((res) => console.log(res.data.score));
  }
  return (
    <>
      <Wrapper>
        <div className="circle">
          <img src="./images/star.png" alt="" />
        </div>
        <p></p>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering
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
    </>
  );
}

export default Rating;
