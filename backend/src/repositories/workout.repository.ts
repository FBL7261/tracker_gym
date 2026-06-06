import { PrismaClient } from '../../../generated/prisma/client'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../../../.env') })

const prisma = new PrismaClient()


// Obtener todos los workouts de un usuario
export async function findWorkoutsByUser(userId: number) {
  return await prisma.workouts.findMany({
    where: { user_id: userId },
    orderBy: { date: 'desc' },   // los más recientes primero
    include: {
      workout_exercises: {        // incluye los ejercicios de cada sesión
        include: {
          workout_sets: true      // y los sets de cada ejercicio
        }
      }
    }
  })
}

// Crear un nuevo workout
export async function createWorkout(data: {
  user_id: number
  date: Date
  notes?: string
}) {
  return await prisma.workouts.create({
    data
  })
}

// 👉 TÚ agregas: findWorkoutById, deleteWorkout, updateWorkout