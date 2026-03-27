"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StepperContextValue {
  currentStep: number
  setCurrentStep: (step: number) => void
  totalSteps: number
}

const StepperContext = React.createContext<StepperContextValue | undefined>(undefined)

function useStepper() {
  const context = React.useContext(StepperContext)
  if (!context) {
    throw new Error("Stepper components must be used within a Stepper")
  }
  return context
}

interface StepperProps {
  children: React.ReactNode
  defaultValue?: number
  value?: number
  onStepChange?: (step: number) => void
}

function Stepper({ children, defaultValue = 1, value: controlledValue, onStepChange }: StepperProps) {
  const [internalStep, setInternalStep] = React.useState(defaultValue)
  const currentStep = controlledValue !== undefined ? controlledValue : internalStep
  
  const handleStepChange = React.useCallback(
    (step: number) => {
      if (controlledValue === undefined) {
        setInternalStep(step)
      }
      onStepChange?.(step)
    },
    [controlledValue, onStepChange]
  )

  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep: handleStepChange, totalSteps: 5 }}>
      <div data-slot="stepper" className="w-full">
        {children}
      </div>
    </StepperContext.Provider>
  )
}

interface StepperIndicatorProps {
  step: number
  onClick?: () => void
}

function StepperIndicator({ step, onClick }: StepperIndicatorProps) {
  const { currentStep, totalSteps } = useStepper()
  const isActive = currentStep === step
  const isCompleted = currentStep > step

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex items-center justify-center size-8 rounded-full border-2 transition-colors",
          isActive && "bg-white border-white",
          isCompleted && "bg-primary text-primary-foreground border-primary",
          !isActive && !isCompleted && "bg-transparent text-white border-white/20",
          onClick && "cursor-pointer hover:border-white/40"
        )}
      >
        <span className={cn(
          "text-sm font-semibold",
          isActive && "text-black",
          isCompleted && "text-primary-foreground",
          !isActive && !isCompleted && "text-white"
        )}>{step}</span>
      </button>
      {step < totalSteps && (
        <div
          className={cn(
            "flex-1 h-px transition-colors",
            currentStep > step ? "bg-white/40" : "bg-white/20"
          )}
        />
      )}
    </>
  )
}

interface StepperItemProps {
  children: React.ReactNode
  step: number
}

function StepperItem({ children, step }: StepperItemProps) {
  const { currentStep } = useStepper()
  const isActive = currentStep === step

  if (!isActive) return null

  return (
    <div data-slot="stepper-content" className="w-full">
      {children}
    </div>
  )
}

function StepperContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div data-slot="stepper-content-wrapper" className={cn("w-full", className)}>
      {children}
    </div>
  )
}

export { Stepper, StepperItem, StepperContent, StepperIndicator, useStepper }
