import React from "react";

const PageNumber = ({ arrayPage, setPage }) => {
  return (
    <div className="pageInfo">
      <p>Pages</p>
      <div className="pageNumber">
        {/* MAP OVER A LIST OF NUMBER */}
        {arrayPage.map((page, i) => {
          return (
            <p
              key={i}
              className="eachNumber"
              onClick={() => {
                setPage(page);
              }}
            >
              {page}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PageNumber;
