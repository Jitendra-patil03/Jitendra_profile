import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSticky: boolean = false;
  activeSection: string;
  pageYOffset: number=0;
  pageXOffset: number;
  like:boolean=false;
  showArea:boolean=false;
  side:string="side";
  constructor() {
    
   }

  @HostListener("window:scroll")
  @debounce() 
  checkScroll() {
    this.pageYOffset = window.pageYOffset;
    this.isSticky = pageYOffset >= 250;
  }

  @HostListener("window:resize")
  @debounce(25) 
  checkResize() {
    this.pageXOffset = window.innerWidth;
    this.isSticky = pageYOffset >= 250;
  }

  ngOnInit(){}
   
  

}

export function debounce(delay: number = 300): MethodDecorator {

  let interval;
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const original = descriptor.value;
      descriptor.value = function (...args) {
      clearTimeout(interval);

      interval = setTimeout(() => {
          interval = null;
          original.apply(this, args);
        }, delay);
      };

      return interval;
  };
}