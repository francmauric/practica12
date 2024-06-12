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
      /* const user = userEvent.setup() 

      render(<App />)

      //buscar el input
      const input = screen.getByRole('textbox')
      expect(input).toBeDefined()

      //buscar el form
      const form = screen.getByRole('form')
      expect(form).toBeDefined()

      //podemos buscar por button
      const button = form.querySelector('button')
      expect(button).toBeDefined()

      await user.type(input, 'midudev')
      await user.click(button!) */

      //asegurar que el elemento se ha agregado
      const list = screen.getByRole('list')
      expect(list).toBeDefined()

      screen.debug()
      expect(list.childNodes.length).toBe(1)

    })


    })