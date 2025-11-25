import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Header } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({ 
    declarations: [
        AppComponent, 
        Header, 
        InvestmentResultsComponent
    ],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
})
export class AppModule {}