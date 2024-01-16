import { Header } from '../Header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="mt-10 mb-4 p-4 max-w-[1366px] mx-auto">{children}</main>
    </>
  )
}
