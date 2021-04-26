import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor', 'Superman'];
  heroeBorrado:string = ''; 

  borrarHeroe() {
    // console.log("Borrando ..."); 
    // this.heroeBorrado = this.heroes[this.heroes.length-1] || ''; 
    // console.log(this.heroes[this.heroes.length-1]) ; 
    this.heroeBorrado = this.heroes.pop() || '' ; 
  }

  }

