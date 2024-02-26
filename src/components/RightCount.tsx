import { useHappyStore } from "../zustand/happyStore";

const RightCount = () => {
  const happiness = useHappyStore((state) => state.happiness);
  const happinessUp = useHappyStore((state) => state.happinessUp);
  const showHappiness = useHappyStore((state) => state.showHappiness);
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ fontSize: "50px" }}>😃:{happiness}</h2>
      <button
        style={{ fontSize: "30px", width: "40px", height: "40px" }}
        onClick={happinessUp}
      >
        +
      </button>
      <button onClick={showHappiness}>Alert Happiness</button>
    </div>
  );
};

export default RightCount;
