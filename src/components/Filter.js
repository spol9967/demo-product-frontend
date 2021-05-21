import React from "react";

function Filter(props) {
  return (
    <div className="filter-list">
      <div class="card p-5">
        <div class="card-body">
          <h5 class="card-title">FILTER BY</h5>
          <p class="card-text">Categories</p>
          <ul>
            <li>
              <input
                class="form-check-input"
                type="checkbox"
                id="all"
                checked={props.activeFilter.includes("all")}
                onChange={(e) => {
                  props.onChange(e.target.id);
                  console.log(props.activeFilter)
                }}
              />
              <label class="form-check-label" for="all">
                All
              </label>
            </li>
            {props.categories &&
              props.categories.map((category) => {
                return (
                  <li>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id={category}
                      checked={props.activeFilter.includes(category)}
                      onChange={(e) => {
                        props.onChange(e.target.id);
                      }}
                    />
                    <label class="form-check-label" for={category}>
                      {category}
                    </label>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
