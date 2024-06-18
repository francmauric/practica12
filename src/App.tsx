import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id:ItemId
  timestamp: number
  text: string
}




function App() {
  const { items, addItem, removeItem } = useItems()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    const input = elements.namedItem('item') 
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return

    
    addItem(input.value)
    

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemId) => () => { 
   removeItem(id)
  }


  return (
    <main>
      <aside>
        <h1>practica</h1>
        <h2>añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label='Añadir informacion'>
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

        {
          items.length === 0 ? (
            <p>
              <strong>No hay elementos en la lista</strong>
            </p>  
          ) : (
        
        <ul>
          {
            items.map((item) => {
              return <Item 
                handleClick={createHandleRemoveItem(item.id)}
              {...item} key={item.id}/>
              
            })
          }
        </ul>
          )
          }
      </section>
    </main>
  )
}

export default App
