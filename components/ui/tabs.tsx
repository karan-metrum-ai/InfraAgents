"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const tabsVariants = cva(
  "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
  {
    variants: {
      radius: {
        none: "!rounded-none",
        sm: "!rounded-sm",
        default: "",
        md: "!rounded-md",
        lg: "!rounded-lg",
        xl: "!rounded-xl",
        "2xl": "!rounded-2xl",
        "3xl": "!rounded-3xl",
        full: "!rounded-full",
      },
    },
    defaultVariants: {
      radius: "default",
    },
  }
)

function Tabs({
  className,
  orientation = "horizontal",
  radius,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> &
  VariantProps<typeof tabsVariants>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(tabsVariants({ radius }), className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default:
          "rounded-lg p-[3px] bg-muted group-data-[orientation=horizontal]/tabs:h-9",
        line: "rounded-lg p-[3px] gap-1 bg-transparent group-data-[orientation=horizontal]/tabs:h-9 rounded-none",
        glass:
          "rounded-xl p-1 backdrop-blur-xl bg-white/[0.06] border border-white/[0.08] shadow-[0_0_1px_0_rgba(255,255,255,0.08)_inset,0_4px_24px_-4px_rgba(0,0,0,0.3)]",
        "glass-lg":
          "rounded-2xl p-1.5 backdrop-blur-xl bg-white/[0.06] border border-white/[0.08] shadow-[0_0_1px_0_rgba(255,255,255,0.08)_inset,0_4px_24px_-4px_rgba(0,0,0,0.3)]",
      },
      radius: {
        none: "!rounded-none",
        sm: "!rounded-sm",
        default: "",
        md: "!rounded-md",
        lg: "!rounded-lg",
        xl: "!rounded-xl",
        "2xl": "!rounded-2xl",
        "3xl": "!rounded-3xl",
        full: "!rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  radius,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant, radius }), className)}
      {...props}
    />
  )
}

const tabsTriggerVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring relative inline-flex items-center justify-center gap-1.5 font-medium whitespace-nowrap transition-all duration-200 ease-out group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {   
      variant: {
        default:
          "border border-transparent text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground h-[calc(100%-1px)] flex-1 rounded-md px-2 py-1 text-sm group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent data-[state=active]:bg-background dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 data-[state=active]:text-foreground after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        small:
          "cursor-pointer text-white/50 rounded-lg px-3 py-2 text-sm [&_svg:not([class*='size-'])]:size-4 hover:text-white/90 hover:bg-white/[0.08] hover:backdrop-blur-md hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_2px_8px_-2px_rgba(0,0,0,0.2)] data-[state=active]:text-white data-[state=active]:bg-white/[0.12] data-[state=active]:backdrop-blur-lg data-[state=active]:shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_4px_16px_-4px_rgba(0,0,0,0.3)]",
        bigger:
          "cursor-pointer text-white/50 rounded-xl px-6 py-2 text-base [&_svg:not([class*='size-'])]:size-5 hover:text-white/90 hover:bg-white/[0.08] hover:backdrop-blur-lg hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_4px_16px_-4px_rgba(0,0,0,0.2)] data-[state=active]:text-white data-[state=active]:bg-white/[0.14] data-[state=active]:backdrop-blur-xl data-[state=active]:shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset,0_8px_32px_-8px_rgba(0,0,0,0.35)]",
      },
      radius: {
        none: "!rounded-none",
        sm: "!rounded-sm",
        default: "",
        md: "!rounded-md",
        lg: "!rounded-lg",
        xl: "!rounded-xl",
        "2xl": "!rounded-2xl",
        "3xl": "!rounded-3xl",
        full: "!rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "default",
    },
  }
)

function TabsTrigger({
  className,
  variant = "default",
  radius,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, radius }), className)}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants, tabsVariants }
