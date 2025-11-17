import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { User } from './user/user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [AppComponent, HeaderComponent, User ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, TasksModule, SharedModule],
})

export class AppModule {
    
}