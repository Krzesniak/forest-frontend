import {Component, OnInit} from '@angular/core';
import {ForestService} from "../../forest.service";
import {MessageService} from "../../message.service";
import {Subscription, interval } from "rxjs";

@Component({
  selector: 'app-pixel-details',
  templateUrl: './pixel-details.component.html',
  styleUrls: ['./pixel-details.component.css']
})
export class PixelDetailsComponent implements OnInit {
  pixel: any;
  rowId: any;
  columnId: any;
  private intervalSubscription: Subscription | undefined;

  constructor(private forestPixelService: ForestService, private messageService: MessageService) {
    this.messageService.message$.subscribe(
      message => {
        this.getPixel(message);
        this.startInterval(message);
      });
  }

  ngOnInit(): void {
    this.getPixel("0:0");
  }

  startInterval(message: string) {
    this.stopInterval();
    this.intervalSubscription = interval(2000).subscribe(() => {
      this.getPixel(message);
    });
  }

  stopInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  getPixel(id: string) {
    this.forestPixelService.getPixelById(id).subscribe(data => {
        this.pixel = data;
        // @ts-ignore
        this.rowId = data.id.split(":")[0];
        // @ts-ignore
        this.columnId = data.id.split(":")[1];
      }
    )
  }


}
