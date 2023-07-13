'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

import EditorJS from '@editorjs/editorjs'
import TextareaAutosize from 'react-textarea-autosize'

import '@/styles/editor.css'

export default function editor() {
  const ref = useRef<EditorJS>()
  const [isMounted, setIsMounted] = useState<boolean>(false)

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
    <form>
      <div className='prose prose-zinc dark:prose-invert'>
        <TextareaAutosize
          className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
          defaultValue='Untitled Post'
          placeholder='Post title'
          autoFocus
        />
        <div id='editor'></div>
      </div>
    </form>
  )
}
