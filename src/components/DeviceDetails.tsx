import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import type { Device, NetworkConnection } from "@/types/device";
import ConnectionDetails from "./ConnectionDetails";

interface DeviceDetailsProps {
  device: Device;
}

const mockConnections: Record<string, NetworkConnection> = {
  "1": {
    switchName: "سويتش المبنى الرئيسي",
    switchIp: "192.168.1.1",
    switchStatus: "active",
    serverName: "خادم المراقبة الرئيسي",
    serverIp: "192.168.1.2",
    serverStatus: "active",
  },
  "2": {
    switchName: "سويتش المبنى الرئيسي",
    switchIp: "192.168.1.1",
    switchStatus: "active",
    serverName: "خادم المراقبة الرئيسي",
    serverIp: "192.168.1.2",
    serverStatus: "faulty",
  },
};

export default function DeviceDetails({ device }: DeviceDetailsProps) {
  const connection = mockConnections[device.id];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-right">تفاصيل الجهاز</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium text-right">الاتصال بالشبكة</h4>
            {connection ? (
              <ConnectionDetails
                switchName={connection.switchName!}
                switchIp={connection.switchIp!}
                switchStatus={connection.switchStatus!}
                serverName={connection.serverName!}
                serverIp={connection.serverIp!}
                serverStatus={connection.serverStatus!}
              />
            ) : (
              <p className="text-right text-muted-foreground">لا يوجد معلومات اتصال</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}