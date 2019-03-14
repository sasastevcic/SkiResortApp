export class SkiPassPrice {
  _id: number;
  mountain_id: number;
  duration: number;
  price: number;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.mountain_id = obj && obj.mountain_id || null;
    this.duration = obj && obj.duration || "";
    this.price = obj && obj.price || "";
  }
}