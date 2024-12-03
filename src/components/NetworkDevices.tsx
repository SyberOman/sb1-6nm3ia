import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Server, Network, Trash2 } from 'lucide-react';
import type { Device } from '@/types/device';

interface NetworkDevicesProps {
  onDelete: (id: string) => void;
}

const mockNetworkDevices: Device[] = [
  {
    id: '4',
    name: 'سويتش المبنى الرئيسي',
    type: 'switch',
    location: 'غرفة الشبكات - الطابق الأول',
    ipAddress: '192.168.1.1',
    macAddress: '00:1B:44:11:3A:C1',
    status: 'active',
  },
  {
    id: '5',
    name: 'خادم المراقبة الرئيسي',
    type: 'server',
    location: 'غرفة الخوادم',
    ipAddress: '192.168.1.2',
    macAddress: '00:1B:44:11:3A:C2',
    status: 'active',
  },
];

export default function NetworkDevices({ onDelete }: NetworkDevicesProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-right">اسم الجهاز</TableHead>
          <TableHead className="text-right">النوع</TableHead>
          <TableHead className="text-right">الموقع</TableHead>
          <TableHead className="text-right">عنوان IP</TableHead>
          <TableHead className="text-right">عنوان MAC</TableHead>
          <TableHead className="text-right">الحالة</TableHead>
          <TableHead className="text-right">الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockNetworkDevices.map((device) => (
          <TableRow key={device.id}>
            <TableCell className="font-medium">{device.name}</TableCell>
            <TableCell>
              {device.type === 'switch' ? (
                <div className="flex items-center gap-2">
                  <Network className="h-4 w-4" />
                  سويتش
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  خادم
                </div>
              )}
            </TableCell>
            <TableCell>{device.location}</TableCell>
            <TableCell dir="ltr" className="text-right">{device.ipAddress}</TableCell>
            <TableCell dir="ltr" className="text-right">{device.macAddress}</TableCell>
            <TableCell>
              <Badge className="bg-green-100 text-green-800">نشط</Badge>
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive/90"
                onClick={() => onDelete(device.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}