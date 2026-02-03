

function App() {

  // TODO: Create a function to fetch data from OUR Backend (not PokeAPI directly)
  
  const handleSearch = async () => {
    console.log("Searching...");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-yellow-400">⚡ PokeSearch</h1>
      
      <div className="flex gap-4 mb-8">
        <input 
          type="text" 
          placeholder="Enter Pokemon Name (e.g., pikachu)" 
          className="p-3 rounded-lg text-black w-64 focus:outline-none border-2 border-yellow-400"
        />
        <button 
          onClick={handleSearch}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Search
        </button>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-80 text-center border border-gray-700">
        <p className="text-gray-400">Search for a Pokemon to see details!</p>
        {/* TODO: Display Image and Name here */}
      </div>
    </div>
  );
}

export default App;