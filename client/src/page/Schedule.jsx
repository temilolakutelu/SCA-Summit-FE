import React, { useState } from 'react';
// import dayOne from "../data/schedule";
// import dayTwo from "../data/schedule";
// import dayThree from "../data/schedule";
import { dayOne, dayTwo, dayThree } from '../data/program';


export const Schedule = () => {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);

  const handleClick1 = event => {
    setIsShown1(true);
    setIsShown2(false);
    setIsShown3(false);
  };

  const handleClick2 = event => {
    setIsShown1(false);
    setIsShown2(true);
    setIsShown3(false);
  };

  const handleClick3 = event => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(true);
  };
  
  return (
    <div className="schedule" id="schedules">
      <div className="lt">
        <h4>SCHEDULE PLAN</h4>
        <h1>SUMMIT SCHEDULE</h1>
        <p>A general overview of the event at shecodeafrica summit 2022</p>
      </div>

      <div className="rt">
        {/* <div className="header">
          <button onClick={handleClick1}>First Session</button>
          <button onClick={handleClick2}>Second Session</button>
          <button onClick={handleClick3}>Third Session</button>
        </div> */}
        <table className="s-1">
          <caption>
            <button class="bn" onClick={handleClick1}>First Session</button>
            <button class="bn" onClick={handleClick2}>Second Session</button>
            <button class="bn" onClick={handleClick3}>Third Session</button>
          </caption>
            {isShown1 && (
              <tbody>
              {dayOne.map((dayOne, key) => {
              return  <>
                        <tr key = {key}>
                          <td>{dayOne.duration}</td>
                          <td>{dayOne.programme}</td>
                        </tr>
                        <tr key = {key}>
                          <td></td>
                          <td>{dayOne.summary}</td>
                        </tr>
                      </>
              })}
              </tbody>
            )}
            {isShown2 && (
              <tbody>
              {dayTwo.map((dayTwo, key) => {
              return  <>
                        <tr key = {key}>
                          <td>{dayTwo.duration}</td>
                          <td>{dayTwo.programme}</td>
                        </tr>
                        <tr key = {key}>
                          <td></td>
                          <td>{dayTwo.summary}</td>
                        </tr>
                      </>
              })}
              </tbody>
            )}
            {isShown3 && (
              <tbody>
              {dayThree.map((dayThree, key) => {
              return  <>
                        <tr key = {key}>
                          <td>{dayThree.duration}</td>
                          <td>{dayThree.programme}</td>
                        </tr>
                        <tr key = {key}>
                          <td></td>
                          <td>{dayThree.summary}</td>
                        </tr>
                      </>
              })}
              </tbody>
            )}
        </table>

      </div>
    </div>
  )
}