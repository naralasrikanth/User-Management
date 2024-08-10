import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Task } from '../../Model/Task';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

@Output() EmitTaskData:EventEmitter<Task> = new EventEmitter<Task>();

OnCloseForm(){
    this.CloseForm.emit(false);
  }
  OnFormSubmit(Form: NgForm) {
    this.EmitTaskData.emit(Form.value);
    this.CloseForm.emit(false);
    console.log(Form.value);
    
  }
}
