export default class WorldLocations {

  private static locations: any[] = [];
  private static capitals: any[] = [];
  private static cities: any[] = [];

  // get location of cities and capitals
  public static getAll(): any[] {
      if (this.locations.length == 0) this.init();
      return this.locations;
  }

  // get location of cities
  public static getCities(): any[] {
      if (this.cities.length == 0) this.init();
      return this.cities;
  }

  // get location of capitals
  public static getCapitals(): any[] {
      if (this.capitals.length == 0) this.init();
      return this.capitals;
  }

  public static init() {
      // console.log("WorldLocations init");
      this.locations = [
          { cap: true, pop:  1298, lat: -15.0, lon: -68.333, country: "Bolivia", name: "La Paz" },
          { cap: true, pop:  2041, lat: -17.333, lon: -65.5, country: "Bolivia", name: "Cochabamba" },
          { cap: true, pop:  12725, lat: -17.333, lon: -61.5, country: "Bolivia", name: "Santa Cruz" },
          { cap: true, pop:  420, lat: -18.666, lon: -67.666, country: "Bolivia", name: "Oruro" },
          { cap: true, pop:  378, lat: -20.6667, lon: -66.6667, country: "Bolivia", name: "Potosí" },
          { cap: true, pop:  175, lat: -21.5833, lon: -63.833, country: "Bolivia", name: "Tarija" },
          { cap: true, pop:  134, lat: -20.0, lon: -64.416, country: "Bolivia", name: "Chuquisaca" },
          { cap: true, pop:  3128, lat: -14.0, lon: -65.0, country: "Bolivia", name: "Beni" },
          { cap: true, pop:  386, lat:-11.183333333 , lon: -67.183333333, country: "Bolivia", name: "Pando" },

      ];

      this.capitals = this.locations.filter(city => city.cap);
      this.cities = this.locations.filter(city => !city.cap);
      return this.locations
  }
}