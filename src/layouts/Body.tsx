import HeaderParts from "../components/componentBase/headerParts";
import Part1 from "../components/BodyComponent/part1";
import Part2 from "../components/BodyComponent/part2";
import Part3 from "../components/BodyComponent/part3";
import Part4 from "../components/BodyComponent/part4";

function Body() {
  const emailData = localStorage.getItem('email');
  const data: string | null = emailData ? JSON.parse(emailData) : null;
  return (
    <div style={{ marginTop: "30px" }}>
      {data ? (
        <HeaderParts name={`hello ${data}, welcome to ProjectDiscovery`} />
      ) : null}
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
    </div>
  );
}

export default Body;
