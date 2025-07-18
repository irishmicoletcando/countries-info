import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import CountryDetailPage from "./pages/CountryDetailPage"

const App = () => {
  return (
    <div className="font-nunito-sans min-h-screen w-full dark:bg-blue-950">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/country" element={<CountryDetailPage />}/>
      </Routes>
    </div>
  )
}

export default App