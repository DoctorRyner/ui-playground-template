import { useEffect, useState } from "react"
import { useLocation, useNavigate, useNavigationType } from "react-router-dom"

export const useHistoryStack = () => {
  const [stack, setStack] = useState<Array<string>>([])
  const { pathname } = useLocation()
  const type = useNavigationType()

  useEffect(() => {
    if (type === "POP") {
      setStack(stack.slice(0, stack.length - 1))
    } else if (type === "PUSH") {
      setStack([...stack, pathname])
    } else {
      setStack([...stack.slice(0, stack.length - 1), pathname])
    }
  }, [pathname, type])

  return stack
}

export const useGoBack = (fallback: string): () => void => {
  const navigate = useNavigate()
  const historyStack = useHistoryStack()

  return () => {
    if (historyStack.length) {
      navigate(-1)
      return
    }

    navigate(fallback)
  }
}

