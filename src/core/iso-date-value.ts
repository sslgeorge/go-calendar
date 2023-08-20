export class ISODateValue {
  constructor(private readonly date: string) {
    if (!ISODateValue.isISODateString(date)) {
      throw new Error(
        `Invalid date format, date must be in ISO format. \nProvided date: ${date}\nExpected format: YYYY-MM-DD`,
      );
    }
  }

  private static isISODateString(date: string): boolean {
    return (
      date.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/) !== null
    );
  }

  public toString(): string {
    return this.date;
  }
}
