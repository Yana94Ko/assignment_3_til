"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import IdPwdInput from "@/components/IdPwdInput";
import { useAppDispatch } from "@/lib/redux/reducers/hook";
import { setProfile } from "@/lib/redux/reducers/profile.reducer";
import { FormEventHandler, useState } from "react";

function LogInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const auth = useAuth();
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
      dispatch(setProfile(id));
    } else {
      alert("로그인 실패~");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <IdPwdInput id={id} pw={pw} setId={setId} setPw={setPw} />
      <button type="submit">로그인하기</button>
    </form>
  );
}

export default LogInForm;
