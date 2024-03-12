import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForceOptionComponentEnum, PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';

import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css'],
})
export class PeopleEditComponent implements OnInit {
  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = 'https://po-sample-api.onrender.com/v1/people';

  title!: string;
  itemId! : string;


  public readonly actions: PoPageDynamicEditActions = {
    save: '/people',
    saveNew: '/people/new',
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Pessoas', link: '/people' },
    ],
  };

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', label: 'User ID', key: true, disabled:true, },
    { property: 'name', label: 'Nome' },
    {
      property: 'genre',
      label: 'Genero',
      options: [
        { label: 'Masculino', value: 'male' },
        { label: 'Feminino', value: 'female' },
        { label: 'Outros', value: 'other' },
      ],
      forceOptionsComponentType: ForceOptionComponentEnum.select,
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

  breadcrumbItem: PoBreadcrumbItem = { label: '' };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    if (id) {
      this.itemId = id;
      this.title = 'Editar Pessoa';
    } else {
      this.title = 'Incluir Pessoa';
      this.fields[0].visible = false

    }
    this.setBreadcrumb();
  }

  private setBreadcrumb() {
    this.breadcrumbItem = { label: this.title.split(' ')[0] };
    this.breadcrumb.items.push(this.breadcrumbItem);
  }
}
