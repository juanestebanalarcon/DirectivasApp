import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Custom-If]'
})
export class CustomIfDirective {

  @Input()set customIf(condicion:boolean){
    if(condicion){
      //lo crea
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      //lo destruye
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef:TemplateRef<HTMLElement>,private viewContainer:ViewContainerRef) {
    
   }

}
