export default function Exercise() {
  const names = ["John", "Sandy", "Steve", "Brian", "Jack"];

  const nameList = names.map((name) => <h2>{name}</h2>);

  return <>{nameList}</>;
}
