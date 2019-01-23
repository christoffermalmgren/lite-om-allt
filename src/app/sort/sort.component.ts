// mapning sortering och andra sortering

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html",
  styleUrls: ["./sort.component.css"]
})
export class SortComponent implements OnInit {
  public dateList = [
    { date: "2017-01-01", time: "09:10" },
    { date: "2017-01-03", time: "16:17" },
    { date: "2017-01-02", time: "16:17" },
    { date: "2017-01-02", time: "08:30" },
    { date: "2017-01-02", time: "22:22" }
  ];

  public mappedDate = this.dateList.map((el, i) => {
    return {
      index: i,
      value: el.date,
      secondaryValue: el.time
    };
  });

  decendOrderDateTime() {
    this.mappedDate.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      } else if (a.value < b.value) {
        return -1;
      } else if (a.value === b.value) {
        if (a.secondaryValue > b.secondaryValue) {
          return 1;
        } else if (a.secondaryValue < b.secondaryValue) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    });
  }

  ngOnInit() {
    this.decendOrderDateTime();
    console.log(this.mappedDate);
  }
}
