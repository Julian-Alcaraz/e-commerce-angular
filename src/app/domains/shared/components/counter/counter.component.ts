import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit,  SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, AfterViewInit, OnDestroy{
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';
  counter = signal(0);
  interval:any;
  
  constructor(){
    // NO ASYC AND BEFORE RENDER
    console.log("constructor");
    console.log("-".repeat(10));
  }
  ngOnChanges(changes:SimpleChanges){
    // BEFORE AND DURING RENDER
    console.log("ngOnCHanges");
    console.log("-".repeat(10));
    console.log(changes);
    if (changes.hasOwnProperty('duration')){
       console.log('duration')
       }
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      console.log(duration)
    }
    const message = changes['message']
    if(message){
      console.log(message)
    }
    
  }
  ngOnInit(){
    // ANTES RENDER ,UNA VEZ, ASYNC
    console.log("ngOnInit");
    console.log("-".repeat(10));
    this.interval=window.setInterval(()=>{
      console.log("run intercal")
      this.counter.update(statePrev => statePrev +1 )
    },1000)
  }
  ngAfterViewInit(){
    // after render, me va decir si los hijos ya fueron renderizados
    console.log("ngAfterViewInit");
    console.log("-".repeat(10));
  }
  ngOnDestroy(){
    // after render, me va decir si los hijos ya fueron renderizados
    console.log("ngOnDestroy");
    console.log("-".repeat(10));
    window.clearInterval(this.interval)
  }
}
