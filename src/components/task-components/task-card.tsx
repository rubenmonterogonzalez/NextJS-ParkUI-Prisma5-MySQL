'use client'
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Task } from "@prisma/client";
import { FC } from "react";
import Link from "next/link";
import { css } from "~/styled-system/css";
import { useRouter } from "next/navigation";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const router = useRouter()

  return (
    <Card
      className={css({
        mr: 'auto',
        ml: 'auto'
      })}
      width='sm'
    >
      <Card.Header>
        <Card.Description>{new Date(task.createdAt).toLocaleDateString()}</Card.Description>
        <Card.Title>{task.title}</Card.Title>
        <Card.Description>{task.description}</Card.Description>
      </Card.Header>
      <Card.Footer gap="3">
        <Button
          variant="outline"
          type="button"
          onClick={() => {
            fetch(`/api/tasks/${task.id}`, {
              method: "DELETE"
            });
            router.refresh()
          }}>
          Delete
        </Button>
        <Button type="submit">
          <Link
            href={`/dashboard/tasks/edit/${task.id}`}
          >Edit</Link>
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default TaskCard;