import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Andre Gide', 'Its better to be hated for what you are than to be loved for what you not.', 'admin', new Date(1992, 4, 12)),
    new Quote(2, 'Mohandas Gandhi', 'Life is like riding a bicycle.To keep your balance,you must keep moving.', 'admin', new Date(1980, 3, 13)),
    new Quote(3, 'Mark Twain', 'Good friends, good books and sleep consience this is the ideal life.', 'admin', new Date(2012, 8, 17)),

  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}
