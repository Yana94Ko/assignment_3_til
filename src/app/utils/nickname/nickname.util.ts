import NickNameData from "./nicknameData.json";

export function getRandomNickName() {
  return (
    NickNameData.skills[
      Math.floor(Math.random() * NickNameData.skills.length)
    ] +
    " " +
    NickNameData.names[Math.floor(Math.random() * NickNameData.names.length)]
  );
}
export const nicknameUtils = {
  getRandomNickName,
};
export default nicknameUtils;
