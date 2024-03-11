import { Component, OnInit } from '@angular/core';
import { ForceOptionComponentEnum, PoBreadcrumb } from '@po-ui/ng-components';

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



  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Pessoas', link: '/people' },
      { label: 'Detalhe' }
    ]
  };


  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', label: 'User ID', key: true },
    { property: 'name', label: 'Nome',  },
    {
      property: 'genre',
      label: 'Genero',
      options: [{ label: 'Masculino', value: 'male' },
      { label: 'Feminino', value: 'female' },
      { label: 'Outros', value: 'other' }],
    },
    {
      property: 'email',
      label: 'E-mail',
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
