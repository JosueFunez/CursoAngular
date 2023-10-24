import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  pages = []
  constructor(private wikipedia: WikipediaService){

  }

  onTerm(term: string){
      this.wikipedia.search(term).subscribe((response: any) =>{
        this.pages = response.query.search;
      })
  }
}
