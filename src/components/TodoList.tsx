import {
  ActionIcon,
  Group,
  HoverCard,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useInputState } from '@mantine/hooks'
import { Todo } from 'data'
import { TimeInput } from '@mantine/dates'
import { IconClock, IconPlus } from '@tabler/icons'
import { useState } from 'react'
import { TodoItem } from './TodoItem'

interface TodoInputProps {
  append: (...items: Todo[]) => void
}
export const TodoInput = ({ append }: TodoInputProps) => {
  const [input, setInput] = useInputState('')
  const [time, setTime] = useState<Date>(new Date())

  const send = () => {
    if (!input) return
    append(new Todo(input, time))
    setInput('')
  }

  return (
    <Group>
      <TimeInput
        value={time}
        onChange={setTime}
        withSeconds
        styles={{ icon: { pointerEvents: 'all' } }}
        icon={
          <HoverCard>
            <HoverCard.Target>
              <ActionIcon onClick={() => setTime(new Date())}>
                <IconClock stroke={0.8} size={26} />
              </ActionIcon>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text>Set to Current Time</Text>
            </HoverCard.Dropdown>
          </HoverCard>
        }
      />
      <TextInput value={input} onChange={setInput} />
      <ActionIcon onClick={send}>
        <IconPlus stroke={1} />
      </ActionIcon>
    </Group>
  )
}
