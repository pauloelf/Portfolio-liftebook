import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ErrorInterface } from "@/types";

export function AlertSuccess({ title, description }: ErrorInterface) {
  return (
    <Alert className="bg-green-50 border-green-200">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="text-green-800">{title}</AlertTitle>
      <AlertDescription className="text-green-700">
        {description}
      </AlertDescription>
    </Alert>
  );
}
