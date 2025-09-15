import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const gridVariants = cva(
  "grid",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
        6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
        12: "grid-cols-12"
      },
      gap: {
        none: "gap-0",
        sm: "gap-2 sm:gap-3",
        md: "gap-4 sm:gap-6",
        lg: "gap-6 sm:gap-8",
        xl: "gap-8 sm:gap-10",
        "2xl": "gap-10 sm:gap-12"
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch"
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      }
    },
    defaultVariants: {
      cols: 1,
      gap: "md",
      align: "stretch"
    }
  }
)

const Grid = React.forwardRef(({ 
  className, 
  cols,
  gap,
  align,
  justify,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(gridVariants({ cols, gap, align, justify }), className)}
      {...props}
    >
      {children}
    </div>
  )
})

Grid.displayName = "Grid"

const gridItemVariants = cva(
  "",
  {
    variants: {
      span: {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
        5: "col-span-5",
        6: "col-span-6",
        7: "col-span-7",
        8: "col-span-8",
        9: "col-span-9",
        10: "col-span-10",
        11: "col-span-11",
        12: "col-span-12",
        full: "col-span-full"
      },
      spanMd: {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
        4: "md:col-span-4",
        5: "md:col-span-5",
        6: "md:col-span-6",
        7: "md:col-span-7",
        8: "md:col-span-8",
        9: "md:col-span-9",
        10: "md:col-span-10",
        11: "md:col-span-11",
        12: "md:col-span-12"
      },
      spanLg: {
        1: "lg:col-span-1",
        2: "lg:col-span-2",
        3: "lg:col-span-3",
        4: "lg:col-span-4",
        5: "lg:col-span-5",
        6: "lg:col-span-6",
        7: "lg:col-span-7",
        8: "lg:col-span-8",
        9: "lg:col-span-9",
        10: "lg:col-span-10",
        11: "lg:col-span-11",
        12: "lg:col-span-12"
      }
    }
  }
)

const GridItem = React.forwardRef(({ 
  className, 
  span,
  spanMd,
  spanLg,
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(gridItemVariants({ span, spanMd, spanLg }), className)}
      {...props}
    >
      {children}
    </div>
  )
})

GridItem.displayName = "GridItem"

export { Grid, GridItem, gridVariants, gridItemVariants }