import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { Task } from '../Model/Task';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,CreateTaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showCreateTaskForm:boolean=false;

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = true;
  }
  CreateTask(data:Task){
console.log('dashboard',data);

  }
}
