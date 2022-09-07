import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
import { isSameMeridian } from 'utility'

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

  isTime() {
    const diff = dayjs(this.date).diff(dayjs(), 'minute')
    return 0 <= diff && diff <= 15
  }
  getColor() {
    if (!isSameMeridian(this.date)) return 'dimmed'
    if (this.isTime()) return 'red'
    else return 'black'
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
