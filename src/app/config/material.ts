import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
 import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginationIntlService } from '../services/matPaginatorIntl.service';

@NgModule({
exports: [
MatInputModule,MatCheckboxModule,MatSelectModule, MatIconModule, MatSidenavModule, MatListModule, MatTableModule,
 MatTreeModule, MatProgressBarModule, MatButtonToggleModule, MatButtonModule, MatPaginatorModule, MatProgressSpinnerModule,
 MatExpansionModule, MatSliderModule,MatTooltipModule, MatSlideToggleModule,MatSnackBarModule,MatDialogModule, MatSortModule
//  , , MatFormFieldModule,
//  MatExpansionModule, MatSlideToggleModule,
// MatCardModule, MatDividerModule, MatDatepickerModule, MatNativeDateModule,
// , , MatSortModule, ,
// MatMenuModule, MatPaginatorModule, , MatTabsModule,
// MatAutocompleteModule, MatStepperModule,
// MatChipsModule
],
providers:[
      {
        provide: MatPaginatorIntl,
        useClass: MatPaginationIntlService,
      }
]
})

export class MaterialModules { }