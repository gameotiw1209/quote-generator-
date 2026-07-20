import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const[quote,setQuote]=useState('')
  const[author,setAuthor]=useState('')
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(false)

 const fetchQuote= async()=>{
  setLoading(true)
  setError(false)
  fetch("https://dummyjson.com/quotes/random")
  .then(raw => raw.json())
  .then(data =>{
    setQuote(data.quote)
    setAuthor(data.author)
  })
  .catch(error=>{
    console.error(error)
    setError(True)
  })
  .finally(()=>{
    setLoading(false)
  })
  }
  useEffect(()=>{
    fetchQuote()
  },[])
  return (
    <div className="min-h-screen bg-[#0B1F1B] flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-[#F4B400] rounded-2xl p-10 shadow-[10px_10px_0px_0px_#000000] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[14px_14px_0px_0px_#000000]">

        {loading ? (
          <p className="text-black text-center font-bold tracking-widest uppercase animate-pulse">Loading...</p>
        ) : error ? (
          <p className="text-black text-center font-bold tracking-widest uppercase">Something went wrong.</p>
        ) : (
          <>
            <p className="font-serif text-3xl md:text-4xl font-black text-black leading-snug text-center">
              {quote}
            </p>
            <p className="mt-6 text-center font-bold uppercase tracking-[0.3em] text-black/70 text-sm">
              — {author}
            </p>
          </>
        )}

        <div className="flex justify-center mt-10">
          <button
            onClick={fetchQuote}
            disabled={loading}
            className="bg-black text-[#F4B400] font-bold uppercase tracking-widest px-8 py-3 rounded-full shadow-[4px_4px_0px_0px_#F4B400] transition-all duration-150 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#F4B400] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-50"
          >
            New Quote
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
