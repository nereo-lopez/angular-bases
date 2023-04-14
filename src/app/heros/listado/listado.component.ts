import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
  public heros: string[] = ['Wrecking Ball', 'Cassidy', 'Kiriko', 'Reaper'];
  public deletedHero?: string;

  deleteLastHero(): void{

    this.deletedHero = this.heros.pop();
  }
}
