import { screen, render } from '@testing-library/react'
import { getPrismicClient } from '../../services/prismic'
import { getSession } from 'next-auth/client'
import Post, { getServerSideProps } from '../../pages/posts/[slug]'
import { mocked } from 'ts-jest/utils'


const post = 
{slug: 'my-new-post', title: 'My new post', content: 'Post excerpt', updatedAt: '07 de outubro'}

jest.mock('next-auth/client')
jest.mock('../../services/prismic')

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Post post= {post}/>)

    expect(screen.getByText('My new post')).toBeInTheDocument()
    expect(screen.getByText('Post excerpt')).toBeInTheDocument()
  })

  it('redirects user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession)

    getSessionMocked.mockResolvedValueOnce(null)
    
    const response = await getServerSideProps({ 
      params: {
        slug: 'my-new-post'
      }
    } as any)


    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: `posts/preview/my-new-post`,
        })
      })
    )
  })
  it('loads initial data', async () => {
    const getSessionMocked = mocked(getSession)
    const getPrismicClientMocked = mocked(getPrismicClient)

    getSessionMocked.mockResolvedValueOnce({activeSubscription: 'fake-active-subscription'}as any)
    
    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{type:'heading', text: 'My new post'}],
          content: [{type: 'paragraph', text: 'Post excerpt'}],
        },
        last_publication_date: '10-07-2021'
      })
    } as any)

    const response = await getServerSideProps({ 
      params: {
        slug: 'my-new-post'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title:'My new post',
            content: '<p>Post excerpt</p>',
            updatedAt: '07 de outubro de 2021'
          }
        }
      })
    )

  })
})