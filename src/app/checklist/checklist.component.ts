import { Component, OnInit } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';

export const CHECKLIST_DATA = [

    {
        guid: 'AAA-BBB-CCC-DDD',
        completed: false,
        description: 'Ir ao Dentista',
        deadline: Date.now(),
        postDate: Date.now(),
        category: CATEGORY_DATA.find(x => x.name == 'Saúde')
    },
    {
      guid: 'AAA-BBB-CCC-DDD',
      completed: true,
      description: 'Reunião de projeto',
      deadline: Date.now(),
      postDate: Date.now(),
      category: CATEGORY_DATA.find(x => x.name == 'Trabalho')
  }

];

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  public dataSource = CHECKLIST_DATA;

  public displayedColumns: string[] = ['id', 'completed', 'description', 'deadline', 'postDate', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  public createNewItem() {
    console.log('Criar novo item do checklist clicado!');

  }

}
