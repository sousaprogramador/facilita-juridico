import '@testing-library/jest-dom'

import { PeopleListPage } from '../../pages/PeopleList'
import { render, screen, waitFor } from '@testing-library/react'

describe('PeopleList', () => {
  it('renders without errors', async () => {
    render(<PeopleListPage />)

    await waitFor(() => {
      expect(screen.getByTestId('PeopleList')).toBeInTheDocument()
    })
  })
})
