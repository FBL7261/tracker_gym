import { Request, Response } from 'express'
import * as workoutService from '../services/workout.services'

// GET /api/workouts?userId=1
export async function getWorkouts(req: Request, res: Response) {
  try {
    const userId = Number(req.query.userId)
    const workouts = await workoutService.getUserWorkouts(userId)
    res.json(workouts)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los workouts' })
  }
}

// POST /api/workouts
export async function createWorkout(req: Request, res: Response) {
  try {
    const { user_id, date, notes } = req.body
    const workout = await workoutService.createWorkout({ user_id, date, notes })
    res.status(201).json(workout)
  } catch (error) {
    console.error('Error detallado:', error)
    res.status(500).json({ error: 'Error al crear el workout' })
  }
}

// 👉 TÚ agregas: deleteWorkout, updateWorkout