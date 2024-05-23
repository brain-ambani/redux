import CakeView from "./features/cake/CakeView";

function App() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center mt-4">
      <h1 className="text-3xl font-semibold text-blue-500">Redux</h1>
      <div>
        <CakeView />
      </div>
    </div>
  );
}

export default App;
