import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { TreeItem } from '../entities/tree-item';
import { TreeControlService } from '../tree-control.service';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnDestroy, OnInit {

  @Input() item: TreeItem;

  public childs: TreeItem[] = [];

  public itemIndeterminate: boolean = false;

  constructor(private treeControl: TreeControlService) { }

  ngOnInit() {
    this.childs = this.treeControl.data.filter(x => x.parentId == this.item.id)
    this.treeControl.dataChange.subscribe(x => {
      this.itemIndeterminate = this.childs.filter(x => x.checked).length > 0 && this.childs.filter(x => !x.checked).length > 0;
    })
  }

  onCheckboxChangedEvent(item) {
    this.treeControl.updateNode(item)
  }

  ngOnDestroy() {
    this.treeControl.dataChange.unsubscribe();
  }
}