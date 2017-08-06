import { Component, Inject } from '@angular/core'
import { TimeService } from './time.service'

@Component({
  selector: 'current-time',
  template: '<p>{{time}}</p>'
})
export class TimeComponent {
  constructor(@Inject(TimeService) timeService) {
    timeService.getTime(time => this.time = time)
  }
}
