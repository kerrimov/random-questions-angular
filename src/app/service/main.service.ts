import { Injectable } from "@angular/core";
import data from "../../assets/questions.json";

@Injectable({
  providedIn: "root"
})
export class MainService {
  constructor() {}
  // getRandomQuantity(data: string[], dataLength: number) {
  //   const random = data.splice(Math.floor(Math.random() * dataLength)[0]);
  //   return random;
  // }
  dataLength: number = data.length;
  genarateRandom(amount) {
    let randomArr = [];
    while (randomArr.length < amount) {
      randomArr = data.reduce((acc, task) => {
        const shouldPush: boolean = !!Math.round(Math.random());
        return shouldPush && acc.length < amount ? [...acc, task] : acc;
      }, []);
    }
    return randomArr;
  }
  isLink(data: string): boolean {
    let regexp = new RegExp("^(http|https)://", "i");
    let str = regexp.test(data);
    return str;
  }

  getData(data: string[]) {
    const newData = {
      imageLink: [],
      questions: []
    };
    data.forEach(item => {
      this.isLink(item)
        ? newData.imageLink.push(item)
        : newData.questions.push(item);
    });
    return newData;
  }
}
