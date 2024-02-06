"use client";
import Link from "next/link";
import { FcLike } from "react-icons/fc";
import { TfiWrite } from "react-icons/tfi";
import { IoIosLogIn } from "react-icons/io";
import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { useAppSelector } from "@/lib/redux/reducers/hook";

function HeaderAuthButtons() {
  const { isLoggedIn } = useAuth();
  const nickname = useAppSelector((state) => state.profile.nickname);
  console.log(nickname);
  return (
    <div className="flex gap-x-4 items-center">
      {isLoggedIn ? (
        <>
          <Link href="/til/my-page" className="flex gap-x-1 leading-4">
            {nickname}님 마이페이지
            <TfiWrite className="leading-4" />
          </Link>
          <Link href="/til/write" className="flex gap-x-1 leading-4">
            TIL 쓰러가기
            <TfiWrite className="leading-4" />
          </Link>
        </>
      ) : (
        <>
          <Link href="/sign-up" prefetch className="flex gap-x-1 leading-4">
            회원가입
            <FcLike className="leading-4" />
          </Link>
          <Link href="/log-in" className=" flex gap-x-1 leading-4">
            로그인
            <IoIosLogIn className="leading-4" />
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
