import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
export class Todo {
  constructor(
    public title: string,
    public date: Date = new Date(),
    readonly id = nanoid()
  ) {}

  toString() {
    return `${dayjs(this.date).format('HH:mm:ss')}: ${this.title}`
  }
}
