import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appItemClassDirective]'
})
export class ItemClassDirectiveDirective {

  constructor(private eleRef : ElementRef) {
      this.eleRef.nativeElement.classList.add('claseItemDefault')
  
  }

}
