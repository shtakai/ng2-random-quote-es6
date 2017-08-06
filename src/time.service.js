export class TimeService {
  constructor() {
    this.time = new Date()
  }

  getTime(callback) {
    callback(new Date());
    setInterval(()  => callback(new Date()), 1000)
  }
}
