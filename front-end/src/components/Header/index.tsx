import React from 'react'
import { menu } from '~/data/menu'
import { PAGES } from '~/constants/pages'
import { logout } from '~/utils/logout.util'
import Logo from '~/assets/svg/logo.svg?react'
import { ChevronDown, LogOut, Settings } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Navbar,
  Button,
  Dropdown,
  NavbarMenu,
  NavbarItem,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  NavbarContent,
  DropdownTrigger,
  DropdownSection,
  NavbarMenuToggle,
} from '@nextui-org/react'

const icons = {
  chevron: <ChevronDown className="h-4 w-4" />,
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="max-w-[1366px] mx-auto navbar-menu">
      <NavbarContent className="navbar-brand">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menu.map((item, idx) =>
          item.as === 'link' ? (
            <NavbarItem
              key={`${item.name}-${idx}`}
              className="data-[active=true]:text-emerald-800"
              isActive={item.conditionActive.some((path) => location.pathname === path)}
            >
              <Link className="text-sm text-current" to={item.url}>
                {item.name}
              </Link>
            </NavbarItem>
          ) : (
            <Dropdown key={`${item.name}-${idx}`}>
              <NavbarItem
                className="data-[active=true]:text-emerald-800"
                isActive={item.conditionActive.some((path) => location.pathname === path)}
              >
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-inherit font-weight-inherit"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu
                aria-label={item.name}
                className="w-[340px]"
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                {item.children.map((subitem, idy) => (
                  <DropdownItem key={`${subitem.name}-${idy}`}>
                    <NavbarItem
                      className="data-[active=true]:text-emerald-800 sm:data-[active=true]:bg-emerald-50"
                      isActive={subitem.conditionActive.some((path) => location.pathname === path)}
                    >
                      <Link
                        className="text-sm block w-full h-full text-inherit sm:px-2 sm:py-1 sm:rounded-md"
                        to={subitem.url}
                      >
                        {subitem.name}
                      </Link>
                    </NavbarItem>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )
        )}
      </NavbarContent>

      <NavbarMenu>
        {menu.map((item, idx) =>
          item.as === 'link' ? (
            <NavbarItem
              key={`${item.name}-${idx}`}
              className="data-[active=true]:text-emerald-800"
              isActive={item.conditionActive.some((path) => location.pathname === path)}
            >
              <Link className="text-sm text-current" to={item.url}>
                {item.name}
              </Link>
            </NavbarItem>
          ) : (
            <Dropdown key={`${item.name}-${idx}`}>
              <NavbarItem
                className="data-[active=true]:text-emerald-800"
                isActive={item.conditionActive.some((path) => location.pathname === path)}
              >
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-inherit font-weight-inherit"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={item.name}
                className="w-[340px]"
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                {item.children.map((subitem, idy) => (
                  <DropdownItem key={`${subitem.name}-${idy}`}>
                    <NavbarItem
                      className="data-[active=true]:text-emerald-800 sm:data-[active=true]:bg-emerald-50"
                      isActive={subitem.conditionActive.some((path) => location.pathname === path)}
                    >
                      <Link
                        className="text-sm block w-full h-full text-inherit sm:px-2 sm:py-1 sm:rounded-md"
                        to={subitem.url}
                      >
                        {subitem.name}
                      </Link>
                    </NavbarItem>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )
        )}
      </NavbarMenu>
      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant="ghost" className="border-none h-10 w-10">
                <Settings className="h-6 w-6" />
              </Button>
            </DropdownTrigger>

            <DropdownMenu variant="faded">
              <DropdownSection>
                <DropdownItem
                  key="exit"
                  className="text-danger"
                  startContent={<LogOut className="h-4 w-4" />}
                  onClick={() => {
                    logout()
                    navigate(PAGES.login)
                  }}
                >
                  Sair
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
