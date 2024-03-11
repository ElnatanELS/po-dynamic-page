import { Component, OnInit } from '@angular/core';

import {
  PoPageDynamicTableActions,
  PoPageDynamicTableFilters,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  readonly apiService = 'https://po-sample-api.onrender.com/v1/people';

  readonly actions: PoPageDynamicTableActions = {
    detail: 'people/detail/:id'
  };

  constructor() {}

  ngOnInit() {}

  fields: Array<PoPageDynamicTableFilters> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Nome', filter: true },
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
}
