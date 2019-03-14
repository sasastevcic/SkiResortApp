export class SkiResort {
  _id: number;
  name: string;
  description: string;
  country: string;
  highest_point: string;
  top_elevation_m: string;
  base_elevation_m: string;
  picture: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || "";
    this.description = obj && obj.description || "";
    this.country = obj && obj.country || "";
    this.highest_point = obj && obj.highest_point || "";
    this.top_elevation_m = obj && obj.top_elevation_m || "";
    this.base_elevation_m = obj && obj.base_elevation_m || "";
    this.picture = obj && obj.picture || "";
  }
}