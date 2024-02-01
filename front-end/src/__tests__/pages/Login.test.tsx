import '@testing-library/jest-dom'

import { LoginPage } from '../../pages/Login'
import { render, screen, waitFor } from '@testing-library/react'

describe('Login', () => {
  it('renders without errors', async () => {
    render(<LoginPage />)

    await waitFor(() => {
      expect(screen.getByTestId('Login')).toBeInTheDocument()
    })
  })
})
