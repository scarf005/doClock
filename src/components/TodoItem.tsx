import { CloseButton, Group, Title } from '@mantine/core'
import { useHover } from '@mantine/hooks'

interface TodoItemProps {
  remove: () => void
  children: string
}
export const TodoItem = ({ remove, children }: TodoItemProps) => {
  const { hovered, ref } = useHover()

  return (
    <Group position="apart" ref={ref}>
      <Title order={2}>{children}</Title>
      <div style={{width: '0vw'}}>
        {hovered && <CloseButton onClick={remove} title="remove todo" />}
      </div>
    </Group>
  )
}
