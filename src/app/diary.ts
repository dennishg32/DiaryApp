export class Diary {
  showDiary: boolean;
  constructor(public id: number, public name: string, public description: string, public date: Date) {
    this.showDiary = false;
  }
}
