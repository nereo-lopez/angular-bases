import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})

export class HeroComponent{

  name: string = 'Wrecking Ball';
  role: string = "Tank";

  get upperCaseName(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${ this.name } - ${ this.role }`;
  }

  changeName(): void {
    this.name = 'Reaper';
  }

  changeRole(): void {
    this.role = 'DPS';
  }

}
