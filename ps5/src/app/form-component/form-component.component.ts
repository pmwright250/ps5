import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  searchTerm: string;

  onSubmit() {
    if (this.searchTerm) {
      // Perform your logic when the form is submitted
    }
  }
}
