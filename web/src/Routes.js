import { Router, Route, Set, Private } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'
import PostsLayout from './layouts/PostsLayout/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
          <Route path="/admin/post/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        </Set>
      </Private>
      <Set wrap={MainLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
