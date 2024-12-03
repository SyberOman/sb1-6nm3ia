import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { DeviceFormData } from '@/types/device';

const formSchema = z.object({
  name: z.string().min(2, { message: 'اسم الجهاز مطلوب' }),
  type: z.enum(['camera', 'security_lock', 'switch', 'server'], { 
    required_error: 'نوع الجهاز مطلوب' 
  }),
  location: z.string().min(2, { message: 'موقع الجهاز مطلوب' }),
  ipAddress: z.string().regex(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/, {
    message: 'عنوان IP غير صالح'
  }),
  macAddress: z.string().regex(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, {
    message: 'عنوان MAC غير صالح'
  }),
});

interface AddDeviceFormProps {
  onSubmit: (data: DeviceFormData) => void;
}

export default function AddDeviceForm({ onSubmit }: AddDeviceFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      type: undefined,
      location: '',
      ipAddress: '',
      macAddress: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right block">اسم الجهاز</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسم الجهاز" {...field} className="text-right" />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right block">نوع الجهاز</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الجهاز" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="camera">كاميرا</SelectItem>
                    <SelectItem value="security_lock">قفل أمني</SelectItem>
                    <SelectItem value="switch">سويتش</SelectItem>
                    <SelectItem value="server">خادم</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right block">الموقع</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل موقع الجهاز" {...field} className="text-right" />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ipAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right block">عنوان IP</FormLabel>
                <FormControl>
                  <Input dir="ltr" placeholder="192.168.1.100" {...field} />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="macAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-right block">عنوان MAC</FormLabel>
                <FormControl>
                  <Input dir="ltr" placeholder="00:1B:44:11:3A:B7" {...field} />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">إضافة الجهاز</Button>
        </div>
      </form>
    </Form>
  );
}