import {Child} from '../../domain/Child';

export class GroupResponse {
    id: number;
    groupName: string;
    children: Child[];
}
