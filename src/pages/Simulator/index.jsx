import { useEffect } from 'react'

export default function Simulator() {
  useEffect(() => {
    window.location.replace('https://simulator.energy.bm/')
  }, [])
  return null
}
