import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Suspense } from 'react';
import { Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import DeviceList from './components/DeviceList';
import NetworkDevices from './components/NetworkDevices';
import AddDeviceForm from './components/AddDeviceForm';
import type { DeviceFormData } from './types/device';

function App() {
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    // In a real app, this would make an API call
    toast({
      title: 'تم حذف الجهاز',
      description: `تم حذف الجهاز بنجاح (ID: ${id})`,
    });
  };

  const handleAddDevice = (data: DeviceFormData) => {
    // In a real app, this would make an API call
    toast({
      title: 'تمت إضافة الجهاز',
      description: 'تم إضافة الجهاز الجديد بنجاح',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">لوحة التحكم الأمنية</h1>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-right">الأجهزة النشطة</CardTitle>
              <CardDescription className="text-right">قائمة بجميع الأجهزة النشطة في النظام</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div className="text-right">جاري التحميل...</div>}>
                <DeviceList status="active" onDelete={handleDelete} />
              </Suspense>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-right">الأجهزة المعطلة</CardTitle>
              <CardDescription className="text-right">قائمة بالأجهزة التي تحتاج إلى صيانة</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div className="text-right">جاري التحميل...</div>}>
                <DeviceList status="faulty" onDelete={handleDelete} />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-right">البنية التحتية للشبكة</CardTitle>
            <CardDescription className="text-right">قائمة بأجهزة الشبكة والخوادم</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div className="text-right">جاري التحميل...</div>}>
              <NetworkDevices onDelete={handleDelete} />
            </Suspense>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-right">إضافة جهاز جديد</CardTitle>
            <CardDescription className="text-right">أدخل تفاصيل الجهاز الجديد هنا</CardDescription>
          </CardHeader>
          <CardContent>
            <AddDeviceForm onSubmit={handleAddDevice} />
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  );
}

export default App;