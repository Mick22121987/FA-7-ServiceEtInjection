import { Component, OnInit } from '@angular/core';

import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public aliment: string;

  constructor(private panierService: PanierService) { }

  ngOnInit() {
  }

  add() {
    this.panierService.add(this.aliment);
  }
}
