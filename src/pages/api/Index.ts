import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Mateus'},
    {id: 2, name: 'Gabi'},
    {id: 3, name: 'Jéssica'}
  ]

  return response.json(users)
}