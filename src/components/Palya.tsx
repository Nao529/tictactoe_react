import { useState } from 'react'
import './App.css'
import './palya.css'

interface PalyaProps() {
  lista: string[]
  kivalaszt:(index: number) => void
}
  
function Palya({ lista, kivalaszt}: PalyaProps) {
  return (
    <section className="palya" aria-label="Játéktér">
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
      <div className="palya__mezo"></div>
    </section>
  )
}

export default Palya
