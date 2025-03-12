import * as React from "react"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className={cn("relative overflow-hidden", className)} {...props} ref={ref}>
                <div className="overflow-y-auto h-full pr-2">{children}</div>
            </div>
        )
    },
)
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }

