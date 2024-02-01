import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button, Card, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

type PopoverDeleteProps = {
  triggerButton: React.ReactNode
  message: string
  onContinue?: () => void | Promise<void>
}

export const PopoverDelete = ({ triggerButton, message, onContinue }: PopoverDeleteProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onRequestContinue = () => {
    setIsLoading(true)
    try {
      onContinue?.()
      setIsOpen(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handeIsOpen = () => setIsOpen((prev) => !prev)

  return (
    <Popover placement="left" isOpen={isOpen} showArrow backdrop="opaque">
      <PopoverTrigger onClick={handeIsOpen}>{triggerButton}</PopoverTrigger>

      <PopoverContent>
        <Card shadow="none" className="max-w-[400px] p-4 border-none bg-white">
          <div className="flex gap-2 box-border flex-shrink-0">
            <AlertTriangle className="min-h-[20px] min-w-[20px] text-yellow-500" />

            <p className="text-xs text-zinc-700">{message}</p>
          </div>

          <div className="flex items-center justify-end gap-2 mt-4">
            <Button
              size="sm"
              variant="ghost"
              color="default"
              disabled={isLoading}
              onClick={handeIsOpen}
            >
              Não
            </Button>

            <Button
              size="sm"
              color="danger"
              variant="solid"
              disabled={isLoading}
              onClick={onRequestContinue}
            >
              Sim
            </Button>
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
