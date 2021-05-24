import React from "react";

function Filter(props) {
  return (
    <div className="filter-list">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">FILTER BY</h5>
          <div className="card-text">
            <p>Categories</p>
            <ul>
              <li>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="all"
                  checked={props.activeFilter.includes("all")}
                  onChange={(e) => {
                    props.onChange(e.target.id);
                    console.log(props.activeFilter);
                  }}
                />
                <label className="form-check-label" htmlFor="all">
                  All
                </label>
              </li>
              {props.categories &&
                props.categories.map((category) => {
                  return (
                    <li key={category}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={category}
                        checked={props.activeFilter.includes(category)}
                        onChange={(e) => {
                          props.onChange(e.target.id);
                        }}
                      />
                      <label className="form-check-label" htmlFor={category}>
                        {category}
                      </label>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
