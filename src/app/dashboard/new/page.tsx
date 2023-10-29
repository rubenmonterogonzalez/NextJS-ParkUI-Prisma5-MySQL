'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { css } from "~/styled-system/css";

export default function NewPage({ params }: any) {
  const router = useRouter();

  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");


  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title)
          setDescription(data.description)
        })
    }
  }, [params.id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        router.refresh()
        router.push('/dashboard')
      } else {
        console.error('Error:', res.status);
      }
    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        router.refresh()
        router.push('/dashboard')
      } else {
        console.error('Error:', res.status);
      }
    }
  };

  return (
    <div className={css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    })}>
      <form
        onSubmit={handleSubmit}
        className={css({
          bgColor: '#1e293b',
          rounded: 'md',
          p: '10',
          w: '3/4',
          xl: { w: '2/6' },
          lg: { w: '2/5' },
          md: { w: '1/2' },
          sm: { w: '3/5' },
        })}
      >
        <Label
          htmlFor="title"
          className={css({
            color: 'white'
          })}>Task Title</Label>
        <Input
          name="title"
          id="title"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Label
          htmlFor="description"
          className={css({
            color: 'white'
          })}>Task Description</Label>
        <Textarea
          name="description"
          id="description"
          cols={30}
          rows={10}
          placeholder="Describe your task..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></Textarea>
        <Button>Submit</Button>
      </form>
    </div>
  )
}

