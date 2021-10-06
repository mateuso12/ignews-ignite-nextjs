import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import {SubscribeButton} from './Index'

jest.mock('next-auth/client')
jest.mock('next/router')

describe('Subscribe0Button component', () => {
  it('renders correctly', () => {

    const useSessionMocked  = mocked(useSession)
    
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)
    expect(screen.getByText('Inscreva-se agora')).toBeInTheDocument()
  })

  it('redirects user to sign in when is not authenticated', () => {
    const signInMocked = mocked(signIn)
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Inscreva-se agora')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()

  })

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([{
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com'
      },
      activeSubscription: 'fake-active-subscription',
      expires: 'fake-expires'
    },
    false
    ])

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Inscreva-se agora')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')
    
  })
  
})
