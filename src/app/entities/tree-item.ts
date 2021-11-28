export interface TreeItem {
    id: number;
    name: string;
    checked: boolean;
    parentId?: number;
}