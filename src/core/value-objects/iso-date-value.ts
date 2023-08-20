export class ISODateValue {
  constructor(private readonly date: string) {
    if (!ISODateValue.isISODateString(date)) {
      throw new Error('Invalid date format');
    }
  }

  private static isISODateString(date: string): boolean {
    return date.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
  }

  public toString(): string {
    return this.date;
  }
}
