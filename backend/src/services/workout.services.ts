import * as workoutRepository from '../repositories/workout.repository'

export async function getUserWorkouts(userId: number) {
  // Por ahora solo llama al repository
  // Aquí en el futuro puedes agregar lógica: calcular PRs, estadísticas, etc.
  return await workoutRepository.findWorkoutsByUser(userId)
}

export async function createWorkout(data: {
  user_id: number
  date: string
  notes?: string
}) {
  // Convierte el string de fecha a objeto Date antes de guardar
  return await workoutRepository.createWorkout({
    ...data,
    date: new Date(data.date)
  })
}

// 👉 TÚ agregas los demás métodos siguiendo este patrón