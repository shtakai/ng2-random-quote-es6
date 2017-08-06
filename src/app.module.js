import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { QuoteService } from './quote.service'
import { RandomQuoteComponent } from './random-quote.component'
import { TimeService } from './time.service'
import { TimeComponent } from './time.component'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RandomQuoteComponent, TimeComponent],
  providers: [QuoteService, TimeService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

