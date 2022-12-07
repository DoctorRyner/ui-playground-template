import { NotFound } from "@/pages/not-found/NotFound"
import { Playground } from "@/pages/root/playground/Playground"
import { Root } from "@/pages/root/Root"
import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const pages = {
  root: "/",
  playground: "/playground"
}

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={pages.root} element={<Root />}/>
      <Route path={pages.playground} element={<Playground />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
