import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EventbusService {
  public addComToWorkspace: EventEmitter<any> = new EventEmitter<any>();
  public delComToWorkspace: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

}
