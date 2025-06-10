export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = `${PokeAPI.baseURL}/location-area`;
    const response = await fetch(url);
    return response.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
  }
}
type NamedApiResource = {
  name: string;
  url: string;
};

type EncounterVersionDetails = {
  rate: number;
  version: NamedApiResource;
};

type Name = {
	name: string;
	language: NamedApiResource;
}

export type ShallowLocations = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: {
    encounter_method: NamedApiResource;
    version_details: EncounterVersionDetails[];
  };
  location: NamedApiResource;
  names: Name[];
  pokemon_encounters: {
	pokemon: NamedApiResource;
	version_details: EncounterVersionDetails[];
  }[];
};

export type Location = {
  // add properties here
};
