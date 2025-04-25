import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { TooltipItemInterface } from "@/types";

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
