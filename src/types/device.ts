export type DeviceType = 'camera' | 'security_lock' | 'switch' | 'server';
export type DeviceStatus = 'active' | 'faulty';

export interface NetworkConnection {
  switchId?: string;
  switchName?: string;
  switchIp?: string;
  switchStatus?: DeviceStatus;
  serverId?: string;
  serverName?: string;
  serverIp?: string;
  serverStatus?: DeviceStatus;
  port?: string;
}

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  location: string;
  ipAddress: string;
  macAddress: string;
  status: DeviceStatus;
  connection?: NetworkConnection;
}

export type DeviceFormData = Omit<Device, 'id' | 'status' | 'connection'>;