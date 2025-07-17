import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div className="font-nunito-sans min-h-screen w-full px-20 py-10">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* <Route path="/country"/> */}
      </Routes>
    </div>
  )
}

export default App