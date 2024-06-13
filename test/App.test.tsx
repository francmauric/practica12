import React from 'react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'


describe('<App />', () => {
    /* test('should work', () => {
        render(<App />)
        screen.debug()

         expect(
           screen.getByText('practica')
         ).toBeDefined()

      }) */
    test('should add items and remove them', async () => {
      render(<App />)
      const user = userEvent.setup() 


      //buscar el input
      const input = screen.getByRole('textbox')
      expect(input).toBeDefined()

      //buscar el form
      const form = screen.getByRole('form')
      expect(form).toBeDefined()

      //podemos buscar por button
      const button = form.querySelector('button')
      expect(button).toBeDefined()

      

      const randomText = crypto.randomUUID()
      await user.type(input, randomText)
      await user.click(button!)

      //asegurar que el elemento se ha agregado
      const list = screen.getByRole('list')
      expect(list).toBeDefined()
      expect(list.childNodes.length).toBe(1)

      //asegurarnos que lo podemos borrar
      const item = screen.getByText(randomText)
      const removeButton = item.querySelector('button')
      expect(removeButton).toBeDefined()

      await user.click(removeButton!)

      const noResults = screen.getByText('No hay elementos en la lista')
      expect(noResults).toBeDefined()

    })


    })