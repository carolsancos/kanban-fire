import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: Task[] = [
    { title: 'Buy milk', description: 'Go to the store and buy milk' },
    { title: 'Create Kanban board', description: 'Develop a Kanban app' }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  drop(event: CdkDragDrop<Task[]>): void {
    if(event.previousContainer === event.container){
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  editTask(list: String, task: Task): void {

  }
}
