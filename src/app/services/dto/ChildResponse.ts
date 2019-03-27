import { PermissionResponse } from '../dto/PermissionResponse';

export class ChildResponse {
    firstName: string;
    id: number;
    lastName: string;
    permissions: PermissionResponse;
}