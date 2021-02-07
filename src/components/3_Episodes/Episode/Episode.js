import React from "react";
import { useTable } from "react-table";

const Episode = props => (
  <div className="card">
      <table>
          <thead>
            <tr>
                <th>Episodes:</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{props.episode}</td>
              </tr>
          </tbody>
         {console.log(props)}
      </table>
    {/* <img className="card-image" src={props.imageSrc} alt="character" />
    <h2 className="card-name">{props.name}</h2> */}
    {/* <p className="card-species">Species: {props.episode}</p> */}
    {/* <p className="card-gender">Gender: {props.gender}</p>
    <p className="card-gender">Status: {props.status}</p> */}
  </div>
);

export default Episode;