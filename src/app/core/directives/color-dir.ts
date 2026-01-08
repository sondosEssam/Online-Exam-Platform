import { Directive, ElementRef, Input, OnInit, Renderer2 , input} from '@angular/core';
@Directive({
  selector: '[appColorDir]'
})
export class ColorDir implements OnInit {

  @Input() colorType: 'blue' | 'red' = 'blue';
  constructor(private el:ElementRef, private renderer:Renderer2) { }
  private addClasses(classes: string) {
  classes.split(' ').forEach(c => this.renderer.addClass(this.el.nativeElement, c));
}
  ngOnInit(): void
   {
    this.addClasses(`px-4 py-2 font-semibold transition delay-300 ease-in-out hover:shadow-md`);
    if(this.colorType==='blue'){
      if(this.el.nativeElement.disabled!=true){
        this.addClasses(`hover:bg-blue-600`);
      }
      this.addClasses(`bg-blue-500 text-white`);   
    }
    else if(this.colorType==='red'){
            if(this.el.nativeElement.disabled!=true){
        this.addClasses(`hover:bg-red-300`);
      }
      this.addClasses(`bg-red-50 text-red-600`);   
    }
    else {
      this.addClasses(`bg-gray-200 text-gray-800 hover:bg-gray-300`);
    }
}
}