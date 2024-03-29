import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppProfileComponent } from 'src/routes/app-profile/app-profile.component';
import { RootComponent } from './component/root/root.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { AppNavBarComponent } from './component/app-nav-bar/app-nav-bar.component';
import { AppPublicNavBarComponent } from './component/app-public-nav-bar/app-public-nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFooterComponent } from './component/app-footer/app-footer.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
@NgModule({
  declarations: [
    // AppComponent
    RootComponent,
    AppFooterComponent,
    // AppNavBarComponent,
    AppPublicNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    NgxHideOnScrollModule ,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
