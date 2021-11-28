export interface TreeItem {
    id: number;
    childs: TreeItem[];
    name: string;
    checked: boolean;
}