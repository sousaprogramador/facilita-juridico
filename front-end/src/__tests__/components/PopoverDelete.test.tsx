import '@testing-library/jest-dom'
import { PopoverDelete } from '../../components/PopoverDelete'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

describe('PopoverDelete', () => {
  test('renders popover delete with message and handles continue button click', async () => {
    const mockOnContinue = jest.fn()

    render(
      <PopoverDelete
        triggerButton={<button>Trigger Button</button>}
        message="Are you sure you want to delete?"
        onContinue={mockOnContinue}
      />
    )

    const triggerButton = screen.getByText('Trigger Button')
    expect(triggerButton).toBeInTheDocument()

    expect(screen.queryByText('Are you sure you want to delete?')).not.toBeInTheDocument()

    fireEvent.click(triggerButton)

    const messageElement = screen.getByText('Are you sure you want to delete?')
    expect(messageElement).toBeInTheDocument()

    const continueButton = screen.getByText('Sim')
    fireEvent.click(continueButton)

    await waitFor(() => {
      expect(mockOnContinue).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(screen.queryByText('Are you sure you want to delete?')).not.toBeInTheDocument()
    })
  })
})
