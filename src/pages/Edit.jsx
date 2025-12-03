import React from "react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const params = useParams();

  return (
    <div>
      <h1>{params.id}. diary</h1>
    </div>
  );
}
