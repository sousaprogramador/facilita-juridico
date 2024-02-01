import '@testing-library/jest-dom'

import { FlipBrand } from '../../components/FlipBrand'
import { render, screen, waitFor } from '@testing-library/react'

describe('FlipBrand', () => {
  it('should render the component correctly', () => {
    render(<FlipBrand />)

    const container = screen.getByTestId('flip-brand-container')
    const letters = screen.getAllByTestId('letter')

    expect(container).toBeInTheDocument()
    expect(letters).toHaveLength(12)
  })

  it('should change the layout of the letters when the state changes', async () => {
    render(<FlipBrand />)

    const container = screen.getByTestId('flip-brand-container')
    const letters = screen.getAllByTestId('letter')

    await waitFor(() => {
      expect(container).toHaveClass('final')
      expect(letters[0]).toHaveStyle({ color: 'black', backgroundColor: '#ffdd00' })
    })

    await waitFor(() => {
      expect(container).toHaveClass('plain')
      expect(letters[0]).toHaveStyle({ color: 'black', backgroundColor: '#ffffff' })
    })

    await waitFor(() => {
      expect(container).toHaveClass('columns')
      expect(letters[0]).toHaveStyle({ color: 'black', backgroundColor: '#ffdd00' })
    })

    await waitFor(() => {
      expect(container).toHaveClass('grid')
      expect(letters[0]).toHaveStyle({ color: 'black', backgroundColor: '#ffffff' })
    })

    await waitFor(() => {
      expect(container).toHaveClass('final')
      expect(letters[0]).toHaveStyle({ color: 'black', backgroundColor: '#ffdd00' })
    })
  })
})
