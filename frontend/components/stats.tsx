'use client'

import { Gamepad2, CheckCircle2, Clock } from 'lucide-react'

interface StatsProps {
  totalGames: number
  completedGames: number
  remainingGames: number
}

export function Stats({ totalGames, completedGames, remainingGames }: StatsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6 bg-foreground/5 backdrop-blur-xl border border-foreground/10 rounded-2xl px-6 py-3.5">
      <div className="flex items-center gap-2 text-foreground">
        <Gamepad2 size={16} className="text-foreground/80" />
        <span className="text-sm text-foreground/60">Total:</span>
        <span className="font-bold text-base">{totalGames}</span>
      </div>
      
      <div className="h-4 w-px bg-foreground/10 hidden sm:block" />

      <div className="flex items-center gap-2 text-foreground">
        <CheckCircle2 size={16} className="text-foreground/80" />
        <span className="text-sm text-foreground/60">Completed:</span>
        <span className="font-bold text-base text-foreground/90">{completedGames}</span>
      </div>

      <div className="h-4 w-px bg-foreground/10 hidden sm:block" />

      <div className="flex items-center gap-2 text-foreground">
        <Clock size={16} className="text-foreground/80" />
        <span className="text-sm text-foreground/60">Remaining:</span>
        <span className="font-bold text-base text-foreground/90">{remainingGames}</span>
      </div>
    </div>
  )
}
