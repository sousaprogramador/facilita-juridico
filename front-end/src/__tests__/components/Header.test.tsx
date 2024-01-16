import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../../components/Header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  test('renders header with menu items', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const logoElement = screen.getByAltText('Logo')
    expect(logoElement).toBeInTheDocument()

    const menuItems = await screen.findAllByRole('menuitem')
    expect(menuItems.length).toBeGreaterThan(0)
  })
})
