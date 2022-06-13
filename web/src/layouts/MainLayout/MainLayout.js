import Navbar from 'src/components/Navbar/Navbar'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout
