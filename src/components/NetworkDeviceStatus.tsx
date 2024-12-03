import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface NetworkDeviceStatusProps {
  status: 'active' | 'faulty';
}

export default function NetworkDeviceStatus({ status }: NetworkDeviceStatusProps) {
  if (status === 'active') {
    return (
      <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
        <CheckCircle2 className="h-4 w-4" />
        نشط
      </Badge>
    );
  }

  return (
    <Badge variant="destructive" className="flex items-center gap-1">
      <AlertCircle className="h-4 w-4" />
      معطل
    </Badge>
  );
}