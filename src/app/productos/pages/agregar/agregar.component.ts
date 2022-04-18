import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto_1:string="¡Éste campo es obligatorio! *";
  color:string="#ED093B";
  formularioProductos:FormGroup=this.fb.group({
    nombre:['',[Validators.required]]
  });
  constructor(private fb:FormBuilder) { }

  tieneError(campo:string):boolean{
    return this.formularioProductos.get(campo)?.invalid || false;
  }
  cambiarNombre(){
    this.texto_1=Math.random().toString();
  }
  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color=color;
  }
  
}
