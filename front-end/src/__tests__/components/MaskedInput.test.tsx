import '@testing-library/jest-dom'
import { MaskedInput } from '../../components/MaskedInput'
import { render, screen, fireEvent } from '@testing-library/react'

describe('MaskedInput', () => {
  test('renders masked input with label and error message', () => {
    render(
      <MaskedInput
        mask={[/\d/, /\d/, /\d/, /\d/]}
        name="test-input"
        label="Test Label"
        errorMessage="Test error message"
      />
    )

    const labelElement = screen.getByText('Test Label')
    expect(labelElement).toBeInTheDocument()

    const inputElement = screen.getByRole('textbox', { name: 'Test Label' })
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: '1234' } })
    expect(inputElement).toHaveValue('1234')

    const errorMessageElement = screen.getByText('Test error message')
    expect(errorMessageElement).toBeInTheDocument()
  })
})
