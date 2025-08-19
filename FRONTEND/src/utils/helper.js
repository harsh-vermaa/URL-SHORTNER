// utils/helper.js or utils/checkAuth.js
import { redirect } from '@tanstack/react-router'
import { getCurrentUser } from '../api/user.api'
import { login } from '../store/slice/authSlice'

export const checkAuth = async ({ context }) => {
  const { queryClient, store } = context

  try {
    const user = await queryClient.ensureQueryData({
      queryKey: ['currentUser'],
      queryFn: getCurrentUser,
    })

    if (!user) {
      throw new Error('No user returned')
    }

    store.dispatch(login(user))

    const { user: currentUser } = store.getState().auth
    if (!currentUser) {
      throw new Error('User not in state')
    }

    return // ✅ Authenticated, allow route
  } catch (error) {
    console.log('Redirecting to /auth due to error:', error)
    return redirect({ to: '/auth' }) // ✅ Redirect if failed
  }
}
