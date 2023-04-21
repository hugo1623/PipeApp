import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'hugo luis';
  
  public nameUpper: string = 'HUGO LUIS';

  public fullName: string = 'hUgO lUIs';

  public customDate: Date = new Date();



}
