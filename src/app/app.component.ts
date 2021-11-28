import { Component } from '@angular/core';
import { TreeItem } from './entities/tree-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: TreeItem[] = [
    { id: 1, childs: [], name: "Родитель", checked: false },
    {
      id: 2, childs: [
        { id: 9, childs: [], name: "child4", checked: true },
        {
          id: 10, childs: [
            { id: 12, childs: [], name: "child66", checked: true },
            { id: 13, childs: [], name: "child667", checked: false },
            { id: 14, childs: [], name: "child668", checked: false },
            { id: 15, childs: [], name: "child669", checked: true },
          ], name: "child2", checked: true
        },
        { id: 11, childs: [], name: "child3", checked: false }
      ], name: "Дитё", checked: false
    },
    { id: 3, childs: [], name: "Дитё", checked: false },
    { id: 4, childs: [], name: "Родитель", checked: false },
    {
      id: 5, childs: [
        { id: 6, childs: [], name: "child", checked: true },
        { id: 7, childs: [], name: "child1", checked: true },
        { id: 8, childs: [], name: "child2", checked: false }
      ], name: "Дитё", checked: false
    },
  ];
}
