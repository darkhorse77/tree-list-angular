import { Component, OnInit } from '@angular/core';
import { TreeItem } from './entities/tree-item';
import { TreeControlService } from './tree-control.service';

const data = [
  { id: 1, name: "Редактирование пользователя", checked: false, parentId: 0 },
  { id: 2, name: "Смена ФИО", checked: false, parentId: 1 },
  { id: 3, name: "Смена даты рождения", checked: true, parentId: 1 },
  { id: 4, name: "Смена номера телефона", checked: false, parentId: 1 },
  { id: 5, name: "Master", checked: false, parentId: 0 },
  { id: 6, name: "Slave", checked: false, parentId: 5 },
  { id: 7, name: "Slave", checked: false, parentId: 5 },
  { id: 8, name: "Slave", checked: false, parentId: 5 },
  { id: 9, name: "Slave", checked: false, parentId: 5 },
  { id: 10, name: "Slave slave", checked: false, parentId: 9 },
  { id: 11, name: "Slave slave", checked: false, parentId: 9 },
  { id: 12, name: "Slave slave slave", checked: false, parentId: 11 },
  { id: 13, name: "Slave slave slave slave", checked: false, parentId: 12 },
  { id: 14, name: "Slave slave slave slave slave", checked: false, parentId: 14 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public tree: TreeItem[];

  constructor(private treeControl: TreeControlService) { }

  ngOnInit() {
    this.treeControl.initialize(data);
    this.tree = this.treeControl.getRootItems();
  }
}
