import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Sneaker} from "../model/sneaker";
import {SneakerService} from "../service/sneaker.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  createForm = this.fb.group({
    brand: ['', [Validators.minLength(3), Validators.maxLength(100), Validators.required]],
    name: ['', [Validators.minLength(3), Validators.maxLength(100), Validators.required]],
    description: ['', [Validators.minLength(3), Validators.maxLength(300), Validators.required]],
    price: ['', [Validators.pattern(/^\d+\.\d{0,2}$/), Validators.required]],
    imageUrl: ['', [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/), Validators.required]],
    shopUrl: ['', [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/), Validators.required]],
    releaseDate: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CreateFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Sneaker, private service: SneakerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitted(): void{
    const sneaker: Sneaker = new Sneaker(0, this.createForm.value.brand, this.createForm.value.description, this.createForm.value.name,
      this.createForm.value.price, this.createForm.value.imageUrl, this.createForm.value.shopUrl, this.createForm.value.releaseDate);
    this.service.createNewSneaker(sneaker).subscribe(() => {
      this.dialogRef.close();
    })
  }
}
