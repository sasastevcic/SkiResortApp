export class Weather {
  _id: number;
  mountain_id: number;
  date: string;
  temperature_min: string;
  temperature_max: string;
  wind: string;
  outlook: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.mountain_id = obj && obj.mountain_id || null;
    this.date = obj && obj.date || "";
    this.temperature_min = obj && obj.temperature_min || "";
    this.temperature_max = obj && obj.temperature_max || "";
    this.wind = obj && obj.wind || "";
    this.outlook = obj && obj.outlook || "";
  }
}