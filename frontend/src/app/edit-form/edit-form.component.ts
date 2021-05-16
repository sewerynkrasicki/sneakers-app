import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Sneaker} from "../model/sneaker";
import {SneakerService} from "../service/sneaker.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  editForm = this.fb.group({
    brand: [this.data.brand, [Validators.min(3), Validators.max(100), Validators.required]],
    name: [this.data.name, [Validators.min(3), Validators.max(100), Validators.required]],
    description: [this.data.description, [Validators.min(3), Validators.max(300), Validators.required]],
    price: [this.data.price, [Validators.pattern(/^\d+\.\d{0,2}$/), Validators.required]],
    imageUrl: [this.data.imageUrl, [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/), Validators.required]],
    shopUrl: [this.data.shopUrl, [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/), Validators.required]],
    releaseDate: [this.data.releaseDate, [Validators.required]]
  });
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Sneaker, private service: SneakerService, private router: Router) { }
  ngOnInit(): void {
  }

  onSubmitted(): void{
    this.data.description = this.editForm.value.description;
    this.data.name = this.editForm.value.name;
    this.data.releaseDate = this.editForm.value.releaseDate;
    this.data.brand = this.editForm.value.brand;
    this.data.shopUrl = this.editForm.value.shopUrl;
    this.data.imageUrl = this.editForm.value.imageUrl;
    this.data.price = this.editForm.value.price;
    this.dialogRef.close(this.data);
  }
}
