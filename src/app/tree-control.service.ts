import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TreeItem } from './entities/tree-item';

@Injectable({
  providedIn: 'root'
})
export class TreeControlService {

  public dataChange = new BehaviorSubject<TreeItem[]>([]);

  get data(): TreeItem[] {
    return this.dataChange.value;
  }

  public initialize(data: TreeItem[]) {
    this.dataChange.next(data);
  }

  // получаем корневые элементы дерева
  public getRootItems(): TreeItem[] {
    return this.data.filter(x => x.parentId == 0);
  }

  public updateNode(item: TreeItem) {
    if (!item) return;
    this.updateParents(item);
    this.updateChilds(item);
  }

  updateParents(item: TreeItem) {
    let parent = this.data.find(x => x.id == item.parentId);
    if (!parent) return;
    parent.checked = this.data.filter(x => x.parentId == parent.id && x.checked == true).length > 0 == true;
    if (parent.parentId != 0) {
      this.updateParents(parent);
    }
    this.dataChange.next(this.data);
  }

  updateChilds(item: TreeItem) {
    if (!this.data.filter(x => x.parentId == item.id).length) return;
    this.data.filter(x => x.parentId == item.id).forEach(i => {
      i.checked = item.checked;
      this.updateChilds(i);
    })
    this.dataChange.next(this.data);
  }
}
