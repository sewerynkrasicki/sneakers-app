import { Component, OnInit } from '@angular/core';
import {SneakerService} from "../service/sneaker.service";
import {Sneaker} from "../model/sneaker";
import {MatDialog} from "@angular/material/dialog";
import {CreateFormComponent} from "../create-form/create-form.component";
import {EditFormComponent} from "../edit-form/edit-form.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sneakers: Sneaker[] = [];
  constructor(private sneakerService: SneakerService, private dialog: MatDialog) { }

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

  moveToShop(shopUrl: String) {
    window.open(<string>shopUrl, "_blank");
  }
  openCreateDialog(sneaker: Sneaker): void{
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '500px',
      data: sneaker
    })

    dialogRef.afterClosed().subscribe((data: Sneaker) => {
      this.sneakerService.updateSneaker(data).subscribe(() => {
        let index = this.sneakers.map(x => {
          return x.id;
        }).indexOf(data.id);
        this.sneakers[index] = data;
        console.log("update success");
      })
    });
  }

}
