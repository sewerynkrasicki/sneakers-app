import { Component, OnInit } from '@angular/core';
import {SneakerService} from "../service/sneaker.service";
import {Sneaker} from "../model/sneaker";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sneakers: Sneaker[] = [];
  constructor(private sneakerService: SneakerService) { }

  ngOnInit(): void {
    this.sneakerService.getAllSneakers().subscribe((res) => {
      this.sneakers = <Sneaker[]> res;
    });
  }

  delete(id: Number) {
    this.sneakerService.deleteSneaker(id).subscribe((res) => {
      let index = this.sneakers.map(x => {
        return x.id;
      }).indexOf(id);
      this.sneakers.splice(index, 1);
    });
  }
}
