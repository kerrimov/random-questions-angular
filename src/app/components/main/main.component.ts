import { Component, OnInit } from "@angular/core";
import { MainService } from "../../service/main.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent {
  dataLength: number = this.mainService.dataLength;
  imageLink: string[];
  questions: string[];
  constructor(private mainService: MainService) {}

  generateQuestion(quantity: number): void {
    const randomArray = this.mainService.genarateRandom(quantity);
    const data = this.mainService.getData(randomArray);
    this.imageLink = data.imageLink;
    this.questions = data.questions;
  }
}
