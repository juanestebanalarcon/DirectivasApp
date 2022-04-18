import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

private _color:string='darkred';
private _message:string="Éste campo es requerido";
htmlElement:ElementRef<HTMLElement>;
@Input() set color(val:string){
  this.setColor();
  //this.htmlElement.nativeElement.style.color=val;
  this._color=val;  
}

@Input() set mensaje(val:string){
  this.setMessage();
  //  this.htmlElement.nativeElement.innerText=val;
  this._message=val;
}
@Input() set valido(valor:boolean){
if(valor){
  this.htmlElement.nativeElement.classList.add('hidden');
}else{
  this.htmlElement.nativeElement.classList.remove('hidden');
}

}
  constructor(private el:ElementRef<HTMLElement>) { 
     this.htmlElement=el;
  }
  
  ngOnInit(): void {
    this.setClassName();    
    this.setColor();
    this.setMessage();
    
  }
  setClassName():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor():void{
    this.htmlElement.nativeElement.style.color=this._color;
  }
  setMessage():void{
    this.htmlElement.nativeElement.innerText=this._message;
  }
}
