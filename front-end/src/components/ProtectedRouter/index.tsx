import { PAGES } from '~/constants/pages'
import { cache } from '~/utils/cache.util'
import { Navigate } from 'react-router-dom'
import { USER_LOGGED } from '~/constants/tokens'
import { UserLoggedInProvider } from '~/providers/user-logged-in-provider'

type ProtectedRouterProps = {
  redirectPath?: string
  children: React.ReactNode
}

export const ProtectedRoute = ({ redirectPath = PAGES.login, children }: ProtectedRouterProps) => {
  const user = cache.getValue(USER_LOGGED)

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return <UserLoggedInProvider>{children}</UserLoggedInProvider>
}
