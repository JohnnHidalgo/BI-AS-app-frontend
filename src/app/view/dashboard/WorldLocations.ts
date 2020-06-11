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
      { cap: false, pop:  0.5, lat: -16.489689, lon: 	-68.119293, country: "Bolivia", name: "La Paz" },
      { cap: false, pop:  0.416, lat: 64.5206680297852, lon: 40.6461601257324, country: "Russia", name: "Arkhangelsk" },
      { cap: false, pop:  5.825, lat: 59.9518890380859, lon: 30.4533271789551, country: "Russia", name: "Saint Petersburg" },
      { cap: false, pop:  0.152, lat: 59.5709991455078, lon: 150.780014038086, country: "Russia", name: "Magadan" },
      { cap: false, pop:  1.160, lat: 58.0002365112305, lon: 56.2324638366699, country: "Russia", name: "Perm'" },
    ];

    this.capitals = this.locations.filter(city => city.cap);
    this.cities = this.locations.filter(city => !city.cap);
    return this.locations
  }
}
