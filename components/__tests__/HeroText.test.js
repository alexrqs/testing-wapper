import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import renderWithProviders from '../../testHelpers/renderWithProviders'

import HeroText from '../HeroText'

describe('Hero Text Component', () => {
  test('change the input name affects the result', async () => {
    renderWithProviders(<HeroText />)
    const input = screen.getByLabelText(/Change User Name/i)
    await userEvent.type(input, 'nombre')
    expect(screen.getByRole('heading')).toHaveTextContent(/CONTEXT APP nombre/i)
  })
})
