import { Directive, ElementRef, Renderer, HostListener, Input, HostBinding } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight:string;

  @HostBinding("class.hover")
  isHover:boolean;

  constructor( private elementRef: ElementRef, private renderer: Renderer) {     
    //renderer.setElementStyle(this.elementRef.nativeElement,"background-color","yellow");
  }

  @HostListener("mouseenter")
  mouseenter(){
    this.renderer.setElementStyle(this.elementRef.nativeElement,"background-color",this.appHighlight);
    this.isHover = true;
  }
  @HostListener("mouseleave")
  mouseleave(){
    this.renderer.setElementStyle(this.elementRef.nativeElement,"background-color","white");
    this.isHover = false;
  }
    

}
