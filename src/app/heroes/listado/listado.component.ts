import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string ='';

  BorrarHeroe() {
    //delete this.heroes[2];
    //const heroeBorrado=this.heroes.shift();
    this.heroeBorrado=this.heroes.shift() || '';
  }

}