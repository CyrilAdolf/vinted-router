import React from "react";

const Filter = ({
  asc,
  setAsc,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <div className="filter">
      <div className="filterAsc">
        {asc === "price-asc" ? (
          <p
            onClick={() => {
              setAsc("price-desc");
            }}
          >
            ⇣ Trier par prix décroissant ?
          </p>
        ) : (
          <p
            onClick={() => {
              setAsc("price-asc");
            }}
          >
            ⇡ Trier par prix croissant ?
          </p>
        )}
      </div>
      <div className="filterPriceMinMax">
        Prix min :
        <input
          type="text"
          value={minPrice}
          placeholder="ex: 2,00 €"
          onChange={(event) => {
            setMinPrice(event.target.value);
          }}
        />
        Prix max :
        <input
          type="text"
          value={maxPrice}
          placeholder="ex: 200 €"
          onChange={(event) => {
            setMaxPrice(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
