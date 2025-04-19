import { type ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TooltipItemInterface {
  trigger: string;
  children: ReactNode;
}

export function TooltipItem({ trigger, children }: TooltipItemInterface) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <span className="font-secondary">{trigger}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
