import { Component, OnInit, Input, Output } from '@angular/core';

import { EventEmitter } from 'events';
import { Task } from './task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() editTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
