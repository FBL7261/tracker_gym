import { Router } from 'express'
import * as workoutController from '../controllers/workout.controller'

const router = Router()

router.get('/', workoutController.getWorkouts)
router.post('/', workoutController.createWorkout)

// 👉 TÚ agregas:
// router.delete('/:id', workoutController.deleteWorkout)
// router.put('/:id', workoutController.updateWorkout)

export default router