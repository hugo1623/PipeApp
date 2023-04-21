import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Hugo Luis';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Helen';
    this.gender = 'female';
  }

  // i18 Plural
  public clients: string[]= ['Hugo','Helen','Maria','Luis', 'Melisa','Ragana'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 cliente esperando.',
    'other': 'tenemos # cliente esperando.',

  }

  deleteClient():void{
    this.clients.shift();
  }
}
