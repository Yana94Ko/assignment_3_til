"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/reducers/hook";
import { updateNickname } from "@/lib/redux/reducers/profile.reducer";
import { useState } from "react";

function NicknameChangeForm() {
  const dispatch = useAppDispatch();
  const nickname = useAppSelector((state) => state.profile.nickname);
  const [newNickname, setNewNickname] = useState(nickname);
  const handleClickUpdateNickname = () => {
    if (!newNickname || newNickname === "") {
      alert("변경할 닉네임을 입력하세요");
      setNewNickname(nickname);
      return;
    }
    dispatch(updateNickname(newNickname));
  };

  return (
    <div>
      <input
        className="border-l-sky-600 bg-slate-500"
        type="text"
        value={newNickname}
        onChange={(e) => setNewNickname(e.target.value)}
      />
      <button onClick={handleClickUpdateNickname}>닉네임 변경</button>
    </div>
  );
}

export default NicknameChangeForm;
