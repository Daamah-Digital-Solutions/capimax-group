import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const stackVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse"
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      },
      gap: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
        "2xl": "gap-10",
        "3xl": "gap-12",
        "4xl": "gap-16",
        "5xl": "gap-20",
        "6xl": "gap-24"
      },
      wrap: {
        nowrap: "flex-nowrap",
        wrap: "flex-wrap",
        "wrap-reverse": "flex-wrap-reverse"
      }
    },
    defaultVariants: {
      direction: "column",
      align: "stretch",
      justify: "start",
      gap: "md",
      wrap: "nowrap"
    }
  }
)

const Stack = React.forwardRef(({ 
  className, 
  direction,
  align,
  justify,
  gap,
  wrap,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(stackVariants({ direction, align, justify, gap, wrap }), className)}
      {...props}
    >
      {children}
    </div>
  )
})

Stack.displayName = "Stack"

// Convenience components
const HStack = React.forwardRef(({ direction = "row", ...props }, ref) => (
  <Stack ref={ref} direction={direction} {...props} />
))
HStack.displayName = "HStack"

const VStack = React.forwardRef(({ direction = "column", ...props }, ref) => (
  <Stack ref={ref} direction={direction} {...props} />
))
VStack.displayName = "VStack"

export { Stack, HStack, VStack, stackVariants }