'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import EditorJS from '@editorjs/editorjs'
import TextareaAutosize from 'react-textarea-autosize'

import '@/styles/editor.css'

const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: 'Title must be at least 3 characters.',
    })
    .max(128, {
      message: 'Title must be less than 128 characters.',
    })
    .optional(),

  content: z.any().optional(),
})

export default function editor() {
  const ref = useRef<EditorJS>()
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    // @ts-ignore
    const Header = (await import('@editorjs/header')).default
    // @ts-ignore
    const List = (await import('@editorjs/list')).default

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
        placeholder: 'Type here to write your post...',
        inlineToolbar: true,
        tools: {
          header: Header,
          list: List,
        },
      })
    }
  }, [])

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSaving(true)

    const blocks = await ref.current?.save()

    console.log(data.title)

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
      }),
    })

    setIsSaving(false)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className='prose prose-zinc dark:prose-invert'>
        <TextareaAutosize
          {...form.register('title')}
          id='title'
          className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
          defaultValue='Untitled Post'
          placeholder='Post title'
          autoFocus
        />
        <div id='editor'></div>
      </div>
      <button>save</button>
    </form>
  )
}
