import { ISODateValue } from './iso-date-value';

export class Chrono {
  private readonly date: Date;

  constructor(private readonly isoDate: ISODateValue) {
    this.date = new Date(isoDate.toString());
  }
}
