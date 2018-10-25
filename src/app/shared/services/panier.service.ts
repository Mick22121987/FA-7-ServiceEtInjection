import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PanierService {
  public panier: string[] = [];

  constructor(private logService: LogService) { }

  add(aliment: string) {
    this.panier.push(aliment);
    this.logService.log('Aliment ajouté');
  }

  removeAliment(index: number) {
    this.panier.splice(index, 1);
    this.logService.log('Aliment supprimé');
  }
}
