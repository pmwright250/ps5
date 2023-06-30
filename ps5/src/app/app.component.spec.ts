import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  queryResult: any[];

  constructor(private dataService: DataService) {}

  handleQuerySubmit(searchTerm: string) {
    this.dataService.queryData(searchTerm).subscribe((response: any) => {
      this.queryResult = response.data;
    });
  }
}
