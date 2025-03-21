import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  media_teoria: number = 0;
  media_lab: number = 0;
  media_final: number = 0;


  btn() { 

    this.media_lab = ((this.nota3 + this.nota4) / 2)
    this.media_teoria = ((this.nota1 + this.nota2) / 2)
    this.media_final = ((this.media_teoria * 0.6) + (this.media_lab * 0.4))

    

    if(this.media_final >= 6){
     
    }

    if(this.media_final < 6){
      
    }

    if(this.media_final >= 5){
     
    }

    if(this.media_final < 5){
      
    }

  }
    
}
