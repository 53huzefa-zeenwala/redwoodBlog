import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import Navbar from 'src/components/Navbar/Navbar'

const PostsLayout = ({ children }) => {
  return (
    <>
    <Navbar/>
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <Link to={routes.newPost()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Post
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
    </>
  )
}

export default PostsLayout
