import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponent {
  searchTerm: string;

  @Output() querySubmit: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    if (this.searchTerm && this.searchTerm.length > 1) {
      this.querySubmit.emit(this.searchTerm);
    }
  }
}
