
'use client'
import React, { FormEvent } from 'react';
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { css } from "~/styled-system/css";
import { Label } from "../ui/label";
import { Card } from "../ui/card";

export default function TaskForm() {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

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
    } else {
      console.error('Error:', res.status);
    }
  };

  return (
    <Card className={css({
      h: 'screen',
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
          lg: { w: '1/4' },
          md: { w: 'full' },
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
        ></Textarea>
        <Button>Submit</Button>
      </form>
    </Card>
  )
}
