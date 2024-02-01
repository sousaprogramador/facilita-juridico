import { forwardRef } from 'react'
import Masked, { MaskedInputProps } from 'react-text-mask'

type InputProps = MaskedInputProps & {
  label?: string
  errorMessage?: string
}

export const MaskedInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="group flex flex-col w-full is-filled">
      <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-unit-8 rounded-small flex-col items-start justify-center gap-0 transition-background !duration-150 transition-colors motion-reduce:transition-none h-12 px-3 py-1">
        {!!props.label && (
          <label
            htmlFor={props.name}
            data-slot="label"
            className="absolute z-10 top-0 mt-[6px] text-xs text-zinc-600 pointer-events-none origin-top-left subpixel-antialiased block cursor-text"
          >
            {props.label}
          </label>
        )}
        <div className="inline-flex w-full items-center h-full box-border group-data-[has-label=true]:items-end">
          <Masked
            className="w-full font-normal mt-5 bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small"
            inputMode="numeric"
            data-slot="input"
            ref={ref as any}
            {...props}
          />
        </div>
      </div>
      {!!props.errorMessage && <p className="text-tiny text-danger">{props.errorMessage}</p>}
    </div>
  )
})
