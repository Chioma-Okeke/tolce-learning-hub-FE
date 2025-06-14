import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex px-4 py-3 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all ease-in-out duration-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "font-semibold bg-[#0020F1] border-2 border-solid border-[#0020F1] text-white w-full md:w-[135px] rounded-lg focus:bg-[#0020F1] hover:bg-[#050794] hover:border-[#050794]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  spinnerSize?: number
}

type IconProps = {
  children?: React.ReactNode
  iconOnly?: boolean // Used by consumers of this component
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & IconProps>(
  function Button(
    {
      className,
      variant,
      size,
      isLoading,
      children,
      icon,
      type = 'button',
      iconPosition = 'left',
      spinnerSize,
      disabled,
      // We use iconOnly in other components that consume this component
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      iconOnly,
      ...props
    },
    ref
  ) {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }), {
          'flex-row-reverse': iconPosition === 'right',
        })}
        ref={ref}
        type={type}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <svg
            width={spinnerSize ?? '20'}
            height={spinnerSize ?? '20'}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
          >
            <path
              fill="currentColor"
              d="M12 21a9 9 0 1 1 6.18-15.55a.75.75 0 0 1 0 1.06a.74.74 0 0 1-1.06 0A7.51 7.51 0 1 0 19.5 12a.75.75 0 0 1 1.5 0a9 9 0 0 1-9 9Z"
            />
          </svg>
        ) : (
          icon
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
