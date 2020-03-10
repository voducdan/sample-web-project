import { Component, OnInit } from "@angular/core";

import { ApiService } from "../api.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  constructor(private api: ApiService) {}

  products: any;
  ngOnInit() {
    this.api.getBooks().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
