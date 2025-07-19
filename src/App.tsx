import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import CountryDetailPage from "./pages/CountryDetailPage"
import { useState, useEffect } from "react"
import type { ThemeColors } from "./types/countryDetails"

const App = () => {
  const [theme, setTheme] = useState<ThemeColors>("light")

  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : ""
  }, [theme])

  return (
    <main className={`font-nunito-sans min-h-screen w-full ${theme === 'dark' ? 'dark bg-blue-950 text-white' : 'bg-grey-50/90 text-grey-950'}`}>
      <Routes>
        <Route path="/" element={<HomePage theme={theme} setTheme={setTheme}/>}/>
        <Route path="/country/:name" element={<CountryDetailPage theme={theme} setTheme={setTheme}/>}/>
      </Routes>
    </main>
  )
}

export default App