import { Component, OnInit } from '@angular/core';

import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  readonly apiService = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicDetailActions = {
    back: '/people',
    edit: 'people/edit/:id'
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', label: 'User ID', key: true },
    { property: 'name', label: 'Nome',  },
    {
      property: 'genre',
      label: 'Genero',
    },
    {
      property: 'birthdate',
      label: 'Data de Nascimento',
      type: 'date',
    },
    {
      property: 'cityName',
      label: 'Cidade',
    },
    {
      property: 'state',
      label: 'Estado',
    },
    {
      property: 'country',
      label: 'País',
    },
  ];

  constructor() { }

  ngOnInit() { }

}
