import dayjs from 'dayjs'
import { nanoid } from 'nanoid'

type rawTodo = { title: string; date: string; id: string }
export class Todo {
  constructor(
    public title: string,
    public date: Date = new Date(),
    readonly id = nanoid()
  ) {}

  toString() {
    return `${dayjs(this.date).format('HH:mm:ss')}: ${this.title}`
  }

  static fromJSON(json: string) {
    const { title, date, id } = JSON.parse(json)
    return new Todo(title, new Date(date), id)
  }

  static fromJSONList(json: string) {
    return (JSON.parse(json) as rawTodo[]).map(
      ({ title, date, id }: rawTodo) => new Todo(title, new Date(date), id)
    )
  }
}
