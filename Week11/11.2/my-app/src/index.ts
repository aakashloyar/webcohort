import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello  Aakash!')
})

export default app
