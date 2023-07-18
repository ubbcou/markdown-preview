import { useEffect, useState } from "react"
import styles from './style.module.css'

export function Tip() {
  'use client'

  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  if (!isClient) {
    return <span>/(ㄒoㄒ)/~~</span>
  }
  return (
    <div className={styles.content}>
      <span>{window.location.origin}</span>
    </div>
  )
}
