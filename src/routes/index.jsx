import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className='p-2 grid gap-2'>
      <ol className='list-disc list-inside px-2'>
        <li>
          <Link to='/login' className='text-blue-500'>
            Go to the public login page.
          </Link>
        </li>
        <li>
          <Link to='/dashboard' className='text-blue-500'>
            Go to the auth-only dashboard page.
          </Link>
        </li>
        <li>
          <Link to='/invoices' className='text-blue-500'>
            Go to the auth-only invoices page.
          </Link>
        </li>
      </ol>
    </div>
  )
}
