import React from "react";

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
      </table>
  </div>
);

export default Episode;