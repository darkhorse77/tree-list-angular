# tree-list-angular
На входе массив объектов (прав доступа) примерная структура объекта
  {
    id: 10,
    parentId: 1
    name: "Редактировать пользователя"
    checked: true
  }

Задача:
Массив произвольным набором элементов.
Отобразить этот массив в виде древовидной структуры, группировка по parentId.
Главное, чтобы это решение не имело предела вложенностей потомков.

Каждый элемент имеет чекбокс, который контролирует как свое внутреннее свойство checked, так и свойство его родителя.
Например, свойство checked родителя может иметь значение true, но сам чекбокс будет в состоянии indeterminate, это если не у всех потомков checked однозначно.
