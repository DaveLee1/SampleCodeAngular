import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: Router, private service: ProductServiceService) { }
  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      prodName: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
