"use client";

import { TIL } from "@/app/api/til/til.response";
import { useEffect, useState } from "react";

type TILs = TIL[];

function TILList() {
  const [TILs, setTILs] = useState<TILs>();
  const getTILs = async () => {
    const url = `${window.location.origin}/api/auth/posts`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    setTILs(data);
  };
  useEffect(() => {
    getTILs();
  });
  return <div></div>;
}

export default TILList;
