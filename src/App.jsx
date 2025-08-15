import Navbar from './components/Navbar.jsx'
import ProfileForm from './components/ProfileForm.jsx'
import Sidebar from './components/sidebar.jsx'

export default function App() {
  return (
    <div className="min-h-screen md:bg-[#F9F9F9] bg-white flex">
      <div className="md:block hidden" >
        <Sidebar />
      </div>
      <div className='w-full'>
        <Navbar />
        <main className="calc-height max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-8">
          <ProfileForm />
        </main>
      </div>
    </div>
  )
}
