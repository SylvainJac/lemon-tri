import { Component, OnInit } from '@angular/core';
import {TourService} from "../../services/tour/tour.service";
import {Step, Tour, Waste} from "../../core/model/tour.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditWasteComponent} from "../modal/edit-waste/edit-waste.component";

@Component({
  selector: 'app-teammate',
  templateUrl: './teammate.component.html',
  styleUrls: ['./teammate.component.scss']
})
export class TeammateComponent implements OnInit {

  public tour: Tour = this.tourService.getTourForDate(new Date());

  constructor(private readonly tourService: TourService,
              private readonly modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public openEditModal(step: Step, waste: Waste | undefined): void {

    const openModal = this.modalService.open(EditWasteComponent);

    openModal.componentInstance.step = step;
    openModal.componentInstance.waste = waste;
    openModal.componentInstance.saveEmit.subscribe((waste: Waste) => {

      if (!!waste?.id) {
        this.tour.steps = this.tour.steps
          .map(value => value.id === step.id ?
            {...step, wastes: step?.wastes
                .map(value1 => value1.id === waste.id ? waste : value1)} : value)
        this.tourService.setTour(this.tour?.id, this.tour);
      } else {
        this.tourService.addWaste(this.tour?.id, step?.id, waste);
      }


    })
  }

  public deleteWaste(step: Step, waste: Waste): void {

  }

}
