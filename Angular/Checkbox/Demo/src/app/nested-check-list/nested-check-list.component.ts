import {Component, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-nested-check-list',
  templateUrl: './nested-check-list.component.html',
  styleUrls: ['./nested-check-list.component.css']
})
export class NestedCheckListComponent {

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

  allComplete(task: Task): boolean {
    const subtasks = task.subtasks;

    if (!subtasks) {
      return false;
    }

    return subtasks.every(t => t.completed) ? true
      : subtasks.every(t => !t.completed) ? false
        : task.completed;
  }

  someComplete(tasks: Task[]): boolean {
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  setAllCompleted(tasks: Task[], completed: boolean) {
    tasks.forEach(t => t.completed = completed);
  }

}
