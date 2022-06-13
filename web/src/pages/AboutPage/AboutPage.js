import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <header className='m-4'>
        <h1>About</h1>
      </header>

    </>
  )
}

export default AboutPage
