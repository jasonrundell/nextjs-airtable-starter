import { render, screen } from '@testing-library/react'
import { enableFetchMocks } from 'jest-fetch-mock'

import App from '../pages/index'

enableFetchMocks()

beforeEach(() => {
  fetchMock.doMock()
})

describe('App', () => {
  it('renders without crashing', () => {
    const projects = [
      { name: 'Lemon headband', category: 'Technology design' },
      { name: 'Coffee packaging', category: 'Brand identity' },
      { name: 'Convertible 3000 laptop', category: 'Technology design' },
      { name: 'RITI media lab logo', category: 'Industrial design' },
      { name: 'New Door brand identity', category: 'Brand identity' },
      { name: 'Premier utility bike', category: 'Industrial design' },
      { name: 'HGH injection device', category: 'Healthcare design' },
      { name: 'CubePad', category: 'Technology design' },
      { name: 'CMCA brand identity', category: 'Brand identity' },
      { name: 'Locax notebook computer', category: 'Technology design' },
      { name: 'B11 bike saddle', category: 'Industrial design' },
      { name: 'Hand hygiene system', category: 'Healthcare design' },
      { name: 'EngineerU brand identity', category: 'Brand identity' },
      { name: 'Flapper brand identity', category: 'Brand identity' },
      { name: '443 Huntington brand identity', category: 'Industrial design' },
      { name: 'Gotham City Parks brand identity', category: 'Brand identity' },
    ]
    render(<App projects={projects} />)
    expect(
      screen.getByRole('heading', { name: 'Welcome to Next.js!' })
    ).toBeInTheDocument()
  })
})
