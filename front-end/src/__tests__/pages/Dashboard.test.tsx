import '@testing-library/jest-dom'

import { DashboardPage } from '../../pages/Dashboard'
import { render, screen, waitFor } from '@testing-library/react'

describe('Dashboard', () => {
  it('renders without errors', async () => {
    render(<DashboardPage />)

    await waitFor(() => {
      expect(screen.getByTestId('Dashboard')).toBeInTheDocument()
    })
  })
})
