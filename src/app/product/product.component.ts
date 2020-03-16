import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ApiService } from "../api.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  products: any;
  ngOnInit() {
    const category = this.route.queryParams["value"]["category"];
    this.api.getBooks(category).subscribe(
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
