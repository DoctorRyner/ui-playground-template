import { pages } from "@/components/Router/Router"
import { FC } from "react"
import { Link } from "react-router-dom"

export const Root: FC = () => (
  <div>
    <Link to={pages.playground}>
      <button>Go to playground</button>
    </Link>
  </div>
)
