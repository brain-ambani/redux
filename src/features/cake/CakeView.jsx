function CakeView() {
  return (
    <div>
      <h2>Number of cakes</h2>
      <button className="bg-sky-500 text-xl p-1 text-white font-semibold rounded-md hover:bg-sky-300">
        Order cake
      </button>
      <br />
      <button className="mt-4 bg-indigo-500 text-xl p-1 text-white font-semibold rounded-md hover:bg-indigo-300">
        Restock cakes
      </button>
    </div>
  );
}
export default CakeView;
