"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import IdPwdInput from "@/components/IdPwdInput";
import { useAppDispatch } from "@/lib/redux/reducers/hook";
import { setProfile } from "@/lib/redux/reducers/profile.reducer";
import { FormEventHandler, useState } from "react";

function SignInForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const auth = useAuth();
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (id === "" || pw === "" || pwCheck === "") {
      alert(
        "아이디와 비밀번호 비밀번호 체크를 모두 입력하세요." + id + pw + pwCheck
      );
      return;
    }
    const url = `${window.location.origin}/api/auth/sign-up`;
    const options = {
      method: "POST",
      body: JSON.stringify({ id, pw, pwCheck }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
      dispatch(setProfile(id));
    } else {
      alert("회원가입 실패. \n사유 :" + data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <IdPwdInput id={id} pw={pw} setId={setId} setPw={setPw} />
      <input
        type="password"
        value={pwCheck}
        onChange={(e) => setPwCheck(e.target.value)}
      />
      <button type="submit">회원가입하기</button>
    </form>
  );
}

export default SignInForm;
