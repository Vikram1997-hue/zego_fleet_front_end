import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  
  currentLang:string;
  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.currentLang = this.localService.getItem('currentlang') || 'en';
    // console.log(this.currentLang);
    
  }

  useLanguage(language: string) {
    this.localService.setItem('currentlang', language);  
    this.currentLang=language;
    this.localService.setLang();
  }
}
