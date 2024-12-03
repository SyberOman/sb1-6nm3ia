import { Network, Server } from "lucide-react";
import NetworkDeviceStatus from "./NetworkDeviceStatus";

interface ConnectionDetailsProps {
  switchName: string;
  switchIp: string;
  switchStatus: 'active' | 'faulty';
  serverName: string;
  serverIp: string;
  serverStatus: 'active' | 'faulty';
}

export default function ConnectionDetails({
  switchName,
  switchIp,
  switchStatus,
  serverName,
  serverIp,
  serverStatus,
}: ConnectionDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2 border rounded-lg p-3">
        <div className="flex items-center justify-between">
          <NetworkDeviceStatus status={switchStatus} />
          <div className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            <h5 className="font-medium">السويتش</h5>
          </div>
        </div>
        <div className="space-y-1 pr-6">
          <p className="text-right">{switchName}</p>
          <p dir="ltr" className="text-right text-muted-foreground">{switchIp}</p>
        </div>
      </div>

      <div className="space-y-2 border rounded-lg p-3">
        <div className="flex items-center justify-between">
          <NetworkDeviceStatus status={serverStatus} />
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            <h5 className="font-medium">الخادم</h5>
          </div>
        </div>
        <div className="space-y-1 pr-6">
          <p className="text-right">{serverName}</p>
          <p dir="ltr" className="text-right text-muted-foreground">{serverIp}</p>
        </div>
      </div>
    </div>
  );
}