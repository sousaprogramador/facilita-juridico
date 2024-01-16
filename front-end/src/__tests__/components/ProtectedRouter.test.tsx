import '@testing-library/jest-dom'
import { cache } from '~/utils/cache.util'
import { MemoryRouter, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { ProtectedRoute } from '../../components/ProtectedRouter'

describe('ProtectedRoute', () => {
  test('renders children when user is logged in', () => {
    const mockUser = 'testUser'
    jest.spyOn(cache, 'getValue').mockReturnValue(mockUser)

    render(
      <MemoryRouter initialEntries={['/protected']}>
        <Route path="/protected">
          <ProtectedRoute>
            <div data-testid="protected-content">Protected Content</div>
          </ProtectedRoute>
        </Route>
      </MemoryRouter>
    )

    const protectedContent = screen.getByTestId('protected-content')
    expect(protectedContent).toBeInTheDocument()
  })

  test('redirects to login when user is not logged in', () => {
    jest.spyOn(cache, 'getValue').mockReturnValue(null)

    render(
      <MemoryRouter initialEntries={['/protected']}>
        <Route path="/protected">
          <ProtectedRoute>
            <div data-testid="protected-content">Protected Content</div>
          </ProtectedRoute>
        </Route>
      </MemoryRouter>
    )

    const loginPage = screen.getByTestId('login-page')
    expect(loginPage).toBeInTheDocument()
  })
})
