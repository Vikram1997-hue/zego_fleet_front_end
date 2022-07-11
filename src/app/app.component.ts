import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobility';

  constructor(private translate: TranslateService , private localService: LocalService){
    translate.use(localStorage.getItem('currentlang') || 'en')
  }

  ngOnInit(): void {
    this.localService.getLang().subscribe((val)=>{
      this.translate.use(localStorage.getItem('currentlang'))
    })
  }
}
