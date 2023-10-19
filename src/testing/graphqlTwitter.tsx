// components/DataComponent.tsx
import React from "react";
import { useQuery } from "@apollo/client";
import { TwitterData } from "../utils/MaskNetwork-Api/RelationshipServiceUsingGraph";

function DataComponent() {
  return (
    <div>
      <button
        onClick={() => {
          try {
            TwitterData();
          } catch (e) {
            console.log(e);
          }
        }}
      >
        TwitterData
      </button>
    </div>
  );
}

export default DataComponent;
