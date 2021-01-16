import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  isSmall:boolean=false;
  ngOnInit() {
    this.checkSize();
  }
  size:number=0;
  @HostListener("window:resize")
  checkSize(){
    this.size = window.innerWidth;
    if(this.size < 500){
      this.isSmall = true;
    }else{
      this.isSmall = false;
    }
  }
  
}
