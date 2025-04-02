import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  public actionName = 'Editar'

  public categoryForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.categoryForm = this.formbuilder.group({
        name: 'Leandro',
        age: '38',
        profession: 'Programador'
    });
  }

  ngOnInit(): void {
  }

  public cancel() {
    console.log('Cancelar clicado');

  }

  public save() {
    console.log('Salvar clicado');

  }

}
