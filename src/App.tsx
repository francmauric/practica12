import { useState } from 'react'
import './App.css'

const INITIAL_ITEMS = [
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: 'Videojuegos',
  },
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: 'Libros'
  }
]

function App() {
  cosnt [items, setItems] = useState(INITIAL_ITEMS)


  return (
    <main>
      <aside>
        <h1>practica</h1>
        <h2>añadir y eliminar elementos de una lista</h2>
        <form >
          <label >
            Elemento a introducir:
            <input 
              name='item'
              required
              type="text" 
              placeholder='Videojuegos'
              />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          <li>Videojuegos</li>
          <li>Libros</li>
          <li>Series</li>
          <li>Peliculas</li>
        </ul>
      </section>
    </main>
  )
}

export default App
