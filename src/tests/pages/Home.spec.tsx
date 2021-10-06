import { screen, render } from '@testing-library/react'
import { stripe } from '../../services/stripe'
import Home from '../../pages'
import { mocked } from 'ts-jest/utils'

jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false]
  }
})
jest.mock('../../services/stripe')

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product= {{priceId: 'fake-price-id', amount: 'R$10,00'}}/>)

    expect(screen.getByText('por R$10,00/ mês')).toBeInTheDocument()
  })

  it('loads initial data', () => {
    const retrievePricesStripeMocked = mocked(stripe.prices.retrieve)
    
    retrievePricesStripeMocked.mock
  })
})