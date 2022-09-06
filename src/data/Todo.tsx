import dayjs from 'dayjs'

export class Todo {
  constructor(public title: string, public date: Date = new Date()) {}

  toString() {
    return `${dayjs(this.date).format('HH:mm:ss')}: ${this.title}`
  }
}
