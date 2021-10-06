import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import {SignInButton} from './Index'
import { useSession } from 'next-auth/client'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    
    useSessionMocked.mockReturnValueOnce([null, false])
    render(<SignInButton />)
    expect(screen.getByText('Entrar com Github')).toBeInTheDocument()
  })
  
})
describe('SignInButton component', () => {
  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)
    
    useSessionMocked.mockReturnValueOnce([{
      user:{name:'John Doe', email:'johh@gmail.com'}, expires: 'fake-expires'
    }, false])
    
    render(<SignInButton />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
  
})