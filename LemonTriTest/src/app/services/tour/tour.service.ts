import {Injectable} from '@angular/core';
import {Client, Container, Material, Quality, Teammate, Tour, Waste} from "../../core/model/tour.model";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private teammates: Teammate[] = [];

  private clients: Client[] = [];

  private tours: Tour[] = [];

  constructor() {
    this.initTeammates();
    this.initClients();
    this.initTours();
  }

  public getTourForDate(date: Date): Tour {
    return this.tours[0];
  }

  public setTour(id: string, tour: Tour): void {
    this.tours = this.tours.map((tour_) => tour_.id === tour.id ? tour : tour_);
  }

  public addWaste(id: string, stepId: string, waste: Waste): void {
    const waste_ = {...waste, id: String(Math.random())}
    const tour = this.tours.find(value => value.id = id);
    tour?.steps.find(value => value.id === stepId)?.wastes?.push(waste);
  }

  public getAllTours(): Tour[] {
    return this.tours;
  }

  private initTours() {
    const waste: Waste = {
      id: '1',
      quantity: 1,
      container: Container.BIG_ROLL,
      material: Material.CARTON,
      quality: Quality.TWO
    }

    const tour: Tour = {
      id: '1',
      name: 'first Tour',
      date: new Date(),
      teammate: this.teammates[0],
      steps: [
        {
          id: '1',
          name: 'Multiflux',
          client: this.clients[0],
          wastes: [waste]
        },
        {
          id: '2',
          name: 'Verre',
          client: this.clients[0],
          wastes: []
        }
      ]
    };

    this.tours.push(tour);
  }

  private initTeammates() {
    const teammate: Teammate = {
      id: '1',
      name: 'Chakila'
    };

    this.teammates.push(teammate);
  }

  private initClients() {
    const client: Client = {
      id: '1',
      name: 'Aftral',
      address: '8 rue'
    };

    this.clients.push(client);
  }
}
