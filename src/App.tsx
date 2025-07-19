import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import CountryDetailPage from "./pages/CountryDetailPage"

const App = () => {
  return (
    <main className="font-nunito-sans min-h-screen w-full">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/country/:name" element={<CountryDetailPage />}/>
      </Routes>
    </main>
  )
}

export default App