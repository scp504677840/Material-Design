import {Component, OnInit} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-nested-checklist',
  templateUrl: './nested-checklist.component.html',
  styleUrls: ['./nested-checklist.component.css']
})
export class NestedChecklistComponent implements OnInit {

  tasks: Task[] = [
    {
      name: 'Reminders',
      completed: false,
      subtasks: [
        {name: 'Cook Dinner', completed: false},
        {name: 'Read the Material Design Spec', completed: false},
        {name: 'Upgrade Application to Angular', completed: false}
      ]
    },
    {
      name: 'Groceries',
      completed: false,
      subtasks: [
        {name: 'Organic Eggs', completed: false},
        {name: 'Protein Powder', completed: false},
        {name: 'Almond Meal Flour', completed: false}
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 是否全部都完成
   *
   * @param {Task} task 任务
   * @returns {boolean} 是否都完成
   */
  allComplete(task: Task): boolean {
    // 获取子条目
    const subtasks = task.subtasks;
    // 当子条目不存在时
    if (!subtasks) {
      return false;
    }
    // 当子条目每一个都是选中时，返回true；
    // 否则当子条目中是否都是未选中，返回false；
    // 否则返回task是否选中；
    return subtasks.every(t => t.completed) ? true : subtasks.every(t => !t.completed) ? false : task.completed;
  }

  /**
   * 部分完成
   *
   * @param {Task[]} tasks
   * @returns {boolean}
   */
  someComplete(tasks: Task[]): boolean {
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  /**
   * 设置全部子条目是否选中
   *
   * @param {Task[]} tasks
   * @param {boolean} completed
   */
  setAllCompleted(tasks: Task[], completed: boolean) {
    tasks.forEach(t => t.completed = completed);
  }

}
