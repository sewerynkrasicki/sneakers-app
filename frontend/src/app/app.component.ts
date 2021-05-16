import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateFormComponent} from "./create-form/create-form.component";
import {Sneaker} from "./model/sneaker";
import {SneakerService} from "./service/sneaker.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private dialog: MatDialog, private router: Router) {
  }

  openCreateDialog(): void{
    const dialogRef = this.dialog.open(CreateFormComponent, {
      width: '500px',
      data: Sneaker
    })

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });

  }
}
