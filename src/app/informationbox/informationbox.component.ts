import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informationbox',
  templateUrl: './informationbox.component.html',
  styleUrls: ['./informationbox.component.scss']
})
export class InformationboxComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    var data = {
      "infoData": [
        {
          name : "New Customer",
          count : 34,
          yesterday : "32 (Yesterday)"
        },
        {
          name : "Enrollment",
          count : "5",
          yesterday : "7 (Yesterday)"
        },
        {
          name : "Transaction",
          count : "16,659",
          yesterday : "12,745 (Yesterday)"
        },
        {
          name : "Profit",
          count : "£9,58,235.00",
          yesterday : "£7,58,235.00 (Yesterday)"
        }
      ]
    }
  }

}
