import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Container, Material, Quality, Step, Waste} from "../../../core/model/tour.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit-waste',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './edit-waste.component.html',
  styleUrls: ['./edit-waste.component.scss']
})
export class EditWasteComponent implements OnInit {

  @Input() public step: Step | undefined;
  @Input() public waste: Waste | undefined;
  @Output() public saveEmit = new EventEmitter<Waste>();

  public material: string = '';
  public container: string = '';
  public quality: string = '';
  public quantity: number = 0;

  constructor(private readonly activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.material = String(this.waste?.material);
    this.container = String(this.waste?.container);
    this.quality= String(this.waste?.quality);
    // @ts-ignore
    this.quantity = this.waste?.quantity | 0;
  }

  get materials(): String[] {
    return Object.keys(Material);
  }

  get containers(): String[] {
    return Object.keys(Container);
  }

  get qualities(): String[] {
    return Object.keys(Quality);
  }

  public close(): void {
    this.activeModal.close();
  }

  public save(): void {

    this.saveEmit.emit({
      ...this.waste,
      // @ts-ignore
      id: this.waste?.id,
      // @ts-ignore
      material: Material[this.material],
      // @ts-ignore
      container: Container[this.container],
      // @ts-ignore
      quality: Quality[this.quality],
      weighed: this.waste?.weighed,
      quantity: this.quantity
    });
    this.activeModal.close();
  }
}
