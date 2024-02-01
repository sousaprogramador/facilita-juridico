import '@testing-library/jest-dom'
import { MoneyInput } from '../../components/MoneyInput'
import { render, screen, fireEvent } from '@testing-library/react'

describe('MoneyInput', () => {
  test('renders money input with label and error message', () => {
    render(<MoneyInput name="money-input" label="Money Label" errorMessage="Test error message" />)

    const labelElement = screen.getByText('Money Label')
    expect(labelElement).toBeInTheDocument()

    const inputElement = screen.getByRole('textbox', { name: 'Money Label' })
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: '12345' } })
    expect(inputElement).toHaveValue('$12,345')

    const errorMessageElement = screen.getByText('Test error message')
    expect(errorMessageElement).toBeInTheDocument()
  })
})
