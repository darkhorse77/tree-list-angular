import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TreeItem } from '../entities/tree-item';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit {

  @Output() onChildChanged = new EventEmitter<boolean>();

  @Input() onParentChanged: Observable<TreeItem>;

  parentChanged: Subject<TreeItem> = new Subject<TreeItem>();



  @Input() item;

  indeterminate: boolean = false;

  ngOnInit() {
    this.onChildChanged.emit(true);
  }

  onCheckboxChangedEvent() {
    this.onChildChanged.emit(true);
    this.parentChanged.next(this.item);
    if(this.item.checked && this.item.childs.length) {
      this.item.childs.map(x => x.checked = true)
    } else if (!this.item.checked && this.item.childs.length) {
      this.item.childs.map(x => x.checked = false)
    }
  }

  onChildChangedEvent(event) {
    if (!this.item.childs.find(x => x.checked == true)) {
      this.item.checked = false;
      this.indeterminate = false;
    }
    if (!this.item.childs.find(x => x.checked == false)) {
      this.item.checked = true;
      this.indeterminate = false;
    }
    if(this.item.childs.filter(x => !x.checked).length > 0 && this.item.childs.filter(x => x.checked).length > 0) {
      this.item.checked = false;
      this.indeterminate = true;
    }
    this.parentChanged.next(this.item);
  }

  onParentChangedEvent(value) {
    console.log(value);
  }
}