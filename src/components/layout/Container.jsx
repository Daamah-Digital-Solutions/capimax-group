import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const containerVariants = cva(
  "mx-auto px-4 sm:px-6 lg:px-8",
  {
    variants: {
      size: {
        sm: "max-w-2xl",
        md: "max-w-4xl", 
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-full",
        prose: "max-w-3xl"
      },
      padding: {
        none: "px-0",
        sm: "px-4 sm:px-6",
        md: "px-4 sm:px-6 lg:px-8",
        lg: "px-6 sm:px-8 lg:px-12",
        xl: "px-8 sm:px-12 lg:px-16"
      }
    },
    defaultVariants: {
      size: "lg",
      padding: "md"
    }
  }
)

const Container = React.forwardRef(({ 
  className, 
  size, 
  padding, 
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(containerVariants({ size, padding }), className)}
      {...props}
    >
      {children}
    </div>
  )
})

Container.displayName = "Container"

export { Container, containerVariants }