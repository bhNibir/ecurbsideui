import React from "react";

const DiseasesCat = ({ row }) => {
  console.log(row.diseaseCategories);
  return (
    <>
      {row?.diseaseCategories?.map((item, index) => (
        <span key={item.id}>{item.name}</span>
      ))}
    </>
  );
};

export default DiseasesCat;
