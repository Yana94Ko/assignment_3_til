import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { id, pw, pwCheck } = body;
  console.log(body);
  if (pw !== pwCheck) {
    return NextResponse.json(
      "Not Acceptable : Password and Password Check Is Not Same",
      { status: 405 }
    );
  } else {
    if (id === "udemy" && pw === "udemy") {
      return NextResponse.json("OK", { status: 200 });
    } else {
      return NextResponse.json(
        "Expectation Failed : Plz reCheck Id and Password",
        { status: 417 }
      );
    }
  }
}
