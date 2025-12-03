import React from "react";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("id")); // /?id=1234 => 1234
  return <div>HOme</div>;
}
