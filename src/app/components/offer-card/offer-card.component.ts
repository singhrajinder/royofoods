import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  @Input() type: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
