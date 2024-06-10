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
    test('should add items and remove them', () => {
      const user = userEvent.setup() 

      render(<App />)

      //buscar el input
      const input = screen.getByRole('textbox')
      expect(input).toBeDefined()

      //buscar el form
      const form = screen.getByRole('form')
      expect(form).toBeDefined()
    })


    })