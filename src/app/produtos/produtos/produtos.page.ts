import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produtos } from '../../models/Produtos';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  formProdutos: FormGroup;
  produto: Produtos = new Produtos();


  constructor( private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formProdutos = this.formBuilder.group({});
  }

  ngOnInit() {
  }

}
