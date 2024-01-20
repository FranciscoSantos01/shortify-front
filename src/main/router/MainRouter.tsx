import { Navigate, Route, Routes } from "react-router-dom"
import { AddLink, Home } from "../pages"
import { EditUrl } from "../../components"


export const MainRouter = () => {
  return (
    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/add" element={<AddLink />} />
        <Route path="/update/:id" element={<EditUrl />} />
        <Route path="/*" element={<Navigate to={'home'} />} />
    </Routes>
  )
}
