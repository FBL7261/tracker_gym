import 'dotenv/config'
import express from 'express'
import workoutRouter from './routes/workout.routes'

const app = express()
const PORT = process.env.PORT || 3000

// Le dice a Express que entienda JSON en el body de las peticiones
app.use(express.json())

// Ruta de prueba para verificar que el servidor funciona
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})


app.use('/api/workouts', workoutRouter)

// 👉 TÚ irás agregando las rutas aquí a medida que las crees
// Ejemplo: app.use('/api/workouts', workoutRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})