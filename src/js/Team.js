export default class Team {
  constructor() {
    this.team = [];
  }

  add(newChar) {
    this.team.push(newChar);
  }

  * [Symbol.iterator]() {
    const last = this.team.length;
    for (let index = 0; index < last; index++) {
      yield this.team[index];
    }
  }
}
