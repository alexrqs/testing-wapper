import { render } from '@testing-library/react'
import PropTypes from 'prop-types'
import { AppContextProvider } from '../contexts/AppContext'

function renderWithProviders(ui, options) {
  return render(ui, { wrapper: Wrapper, ...options })
}

function Wrapper({ children }) {
  return <AppContextProvider>{children}</AppContextProvider>
}

Wrapper.propTypes = {
  children: PropTypes.node
}

export default renderWithProviders
