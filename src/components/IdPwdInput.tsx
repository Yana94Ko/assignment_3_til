interface IdPwdInputProps {
  id: string;
  pw: string;
  setId: (id: string) => void;
  setPw: (pw: string) => void;
}

function IdPwdInput({ id, pw, setId, setPw }: IdPwdInputProps) {
  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
    </>
  );
}

export default IdPwdInput;
