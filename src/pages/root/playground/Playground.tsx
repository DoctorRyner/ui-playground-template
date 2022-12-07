import { pages } from "@/components/Router/Router"
import { useGoBack } from "@/helpers/hooks"
import { FC } from "react"
import styles from "./Playground.module.scss"

export const Playground: FC = () => {
  const goBack = useGoBack(pages.root)

  return (
    <div className={styles.page}>
      <h1>Playground</h1>
      <button onClick={goBack}>Go to the root</button>
    </div>
  )
}
