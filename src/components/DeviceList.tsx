import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, Trash2 } from 'lucide-react';
import type { Device } from '@/types/device';
import DeviceDetails from './DeviceDetails';

interface DeviceListProps {
  status: 'active' | 'faulty';
  onDelete: (id: string) => void;
}

const mockDevices: Record<string, Device[]> = {
  active: [
    {
      id: '1',
      name: 'كاميرا المدخل',
      type: 'camera',
      location: 'البوابة الرئيسية',
      ipAddress: '192.168.1.100',
      macAddress: '00:1B:44:11:3A:B7',
      status: 'active',
    },
    {
      id: '2',
      name: 'قفل أمني',
      type: 'security_lock',
      location: 'المدخل الرئيسي',
      ipAddress: '192.168.1.101',
      macAddress: '00:1B:44:11:3A:B8',
      status: 'active',
    },
  ],
  faulty: [
    {
      id: '3',
      name: 'كاميرا المراقبة',
      type: 'camera',
      location: 'ساحة الانتظار',
      ipAddress: '192.168.1.102',
      macAddress: '00:1B:44:11:3A:B9',
      status: 'faulty',
    },
  ],
};

export default function DeviceList({ status, onDelete }: DeviceListProps) {
  const devices = mockDevices[status];

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
          <TableHead className="text-right">التفاصيل</TableHead>
          <TableHead className="text-right">الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {devices.map((device) => (
          <TableRow key={device.id}>
            <TableCell className="font-medium">{device.name}</TableCell>
            <TableCell>
              {device.type === 'camera' ? 'كاميرا' : 'قفل أمني'}
            </TableCell>
            <TableCell>{device.location}</TableCell>
            <TableCell dir="ltr" className="text-right">{device.ipAddress}</TableCell>
            <TableCell dir="ltr" className="text-right">{device.macAddress}</TableCell>
            <TableCell>
              {status === 'active' ? (
                <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  نشط
                </Badge>
              ) : (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  معطل
                </Badge>
              )}
            </TableCell>
            <TableCell>
              <DeviceDetails device={device} />
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