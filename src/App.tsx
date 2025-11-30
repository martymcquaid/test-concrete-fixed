import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          Welcome to test-concrete-fixed
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          Built with Chipify AI ✨
        </p>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            Count is {count}
          </button>
        </div>
        <p className="text-purple-300 mt-8 text-sm">
          Tell Chippy what you want to build!
        </p>
      </div>
    </div>
  )
}

export default App
