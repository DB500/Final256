import { Injectable } from '@angular/core';
import {Info} from "./info";

@Injectable({
  providedIn: 'root'
})
export class ContactinfoService {
  info: Info[] | undefined;
  constructor() { }
  addItem(info: Info) {
    if (this.info == undefined) {
      this.info = new Array(info);
    }
    else {
      this.info.push(info);
    }
  }

}
