import { NextResponse } from 'next/server'

import { db } from '@/db'
import { users } from '@/db/schema'

interface BodyData {
  id: string
  username: string | null
  image_url: string | null
}

export async function POST(request: Request) {
  const body = await request.json()

  const { id, username, image_url } = body.data as BodyData

  Object.keys(body.data).forEach((value) => {
    if (!body.data[value]) {
      NextResponse.error()
    }
  })

  const newUser = await db.insert(users).values({
    id: id,
    username: username,
    imageUrl: image_url,
  })

  return NextResponse.json(newUser)
}
