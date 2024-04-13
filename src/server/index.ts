import express from 'express'

const PORT = 5000

const app = express()

app.get('/api/hello', async (req, res) => {
  res.json({
    message: 'HELL!!!!!!!!!!!!!!!!!',
  })
})

app.listen(PORT, () => {
  console.log('JFIEJIFJEOFJIO')
})
