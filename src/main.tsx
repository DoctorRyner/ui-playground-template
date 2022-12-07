import { App } from "@/components/App/App"
import React from "react"
import ReactDOM from "react-dom/client"
import "@/index.scss"

const root = document.getElementById("root")

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error("There is no html node with the id #root")
}

