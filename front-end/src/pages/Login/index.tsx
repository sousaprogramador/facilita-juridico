import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { EyeOff, Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '@nextui-org/react'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from '../../utils/toast'
import { PAGES } from '../../constants/pages'
import { cache } from '../../utils/cache.util'
import { FlipBrand } from '../../components/FlipBrand'
import { loginMutation } from '../../queries/login.mutation'
import { ACCESS_TOKEN, USER_LOGGED } from '../../constants/tokens'
import { LoginFormData, loginFormSchema } from '../../validations/schemas/login.schema'

export const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: loginMutation,
    onSuccess(data) {
      //TODO; armazenar token e usuario.
      cache.setValue(ACCESS_TOKEN, data.token)
      cache.setValue(USER_LOGGED, JSON.stringify(data.user))
      navigate(PAGES.dashboard)
    },
    onError() {
      toast('Usuário ou senha inválida.', { type: 'error' })
    },
  })

  const onHandleSubmit = handleSubmit((data) => {
    mutate(data)
  })

  return (
    <main className="w-full h-screen" data-testid="Login">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="p-4 w-full hidden md:block">
          <div className="bg-green-100 w-full h-full rounded-2xl flex items-center justify-center">
            <FlipBrand />
          </div>
        </div>
        <div className="p-4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-zinc-900 text-center mt-14">Bem-vindo</h1>
          <p className="text-sm text-zinc-600 text-center">
            Veja suas rotas e todas as informações adicionais.
          </p>
          <form className="mt-10 mb-10 flex flex-col gap-6" onSubmit={onHandleSubmit}>
            <div className="w-full max-w-lg mx-auto">
              <Input
                type="email"
                label="E-mail"
                placeholder="Informe seu e-mail"
                variant="bordered"
                {...register('email')}
                required
              />
              {!!errors.email?.message && (
                <p className="text-red-700 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="w-full max-w-lg mx-auto">
              <Input
                type={isVisible ? 'text' : 'password'}
                label="Senha"
                placeholder="Informe sua senha"
                variant="bordered"
                {...register('password')}
                required
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <Eye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
              />
              {!!errors.password?.message && (
                <p className="text-red-700 text-sm">{errors.password.message}</p>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              isLoading={isPending}
              className="max-w-lg mx-auto w-full bg-emerald-700 text-white font-bold uppercase"
            >
              Entrar
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
