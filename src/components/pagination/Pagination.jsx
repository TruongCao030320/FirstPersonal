import React, { useEffect } from "react";

const Pagination = (props) => {
  const { totalfoods, foodperpage, setCurrentPage } = props;
  const totalPages = Math.ceil(totalfoods / foodperpage);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  useEffect(() => {
    console.log("totalfood", totalfoods + "and" + foodperpage);
    console.log(totalPages);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      {pages.map((page, index) => {
        return (
          <button
            style={{
              backgroundColor: "transparent",
              borderRadius: 20,
            }}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
