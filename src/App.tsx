import './App.css'

function App() {
  
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
