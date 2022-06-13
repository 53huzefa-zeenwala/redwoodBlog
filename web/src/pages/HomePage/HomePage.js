import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="m-4">
        <ArticlesCell/>
      </div>
    </>
  )
}

export default HomePage
