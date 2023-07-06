import SettingsForm from '@/components/settings-form'

export default function Dashboard() {
  return (
    <div className='grid gap-8'>
      <div className='grid gap-1'>
        <h1 className='font-heading text-3xl font-bold md:text-4xl'>
          Settings
        </h1>
        <p className='text-lg text-muted-foreground'>
          Manage account and website settings.
        </p>
      </div>
      <SettingsForm />
    </div>
  )
}
