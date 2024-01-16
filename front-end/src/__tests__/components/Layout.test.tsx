import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { render, screen } from '@testing-library/react'

describe('Layout', () => {
  test('renders layout with header and children', async () => {
    render(
      <BrowserRouter>
        <Layout>
          <div data-testid="child-component">Child Component Content</div>
        </Layout>
      </BrowserRouter>
    )

    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()

    const childComponent = screen.getByTestId('child-component')
    expect(childComponent).toBeInTheDocument()
    expect(childComponent).toHaveTextContent('Child Component Content')
  })
})
