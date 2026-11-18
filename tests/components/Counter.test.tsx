import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from '../../src/components/Counter'

describe('Counter', () => {
  it('should render with 0', () => {
    render(<Counter />)

    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })

  it('should render with 1 after user click on button', async () => {
    render(<Counter />)
    const button = screen.getByRole('button')
    const user = userEvent.setup()

    await user.click(button)

    expect(screen.getByText(/1/i)).toBeInTheDocument()
    expect(button).toHaveTextContent(/1/i)
  })
})
