import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  @Output()
  themeEmitter = new EventEmitter<string>();
  theme:string = 'light'

  @ViewChild('slider')
  slider!: any;

  @ViewChild('toggleBtn')
  toggleBtn!: any;

  slide(){
    this.toggleBtn.nativeElement.style.justifyContent = this.theme == 'light'? 'start' : 'end'
  }

  toggleTheme(){
    this.theme = this.theme == 'light' ? 'dark' : 'light'
    this.alertTheme(this.theme)
  }
  alertTheme(theme:string){
    this.theme = theme
    this.themeEmitter.emit(theme)
  }
}
