import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input component for text-based user data entry.
 * 
 * @note This component is designed for composition. It does not include a label prop.
 * Use it alongside `Label` or the `Field` component suite for labels and descriptions.
 * 
 * @example
 * <div className="grid gap-1.5">
 *   <Label htmlFor="email">Email</Label>
 *   <Input id="email" type="email" />
 * </div>
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          "border-input bg-background text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-sm transition-[color,box-shadow] outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "file:mr-2 file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
