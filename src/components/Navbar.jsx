import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <header className="bg-white border-b-2 border-[#EFEFEF]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Left: Hamburger */}
          <button aria-label="Open menu" className="p-2 rounded-lg md:hidden ">
            <Bars3Icon className="w-6 h-6" />
          </button>

            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 max-w-[330px]">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
              <input
                aria-label="Search"
                placeholder="Search"
                className="bg-transparent outline-none w-full text-sm placeholder-gray-500"
              />
            </div>

          {/* Right: notify + avatar */}
          <div className="flex items-center space-x-3">
            <button aria-label="Search" className="md:hidden p-2 rounded-lg bg-gray-100">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button aria-label="Notifications" className="p-2 rounded-lg bg-gray-100">
              <BellIcon className="w-6 h-6 text-gray-700" />
            </button>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&auto=format&fit=crop"
              alt="User avatar"
              className="w-9 h-9 rounded-lg object-cover ring-1 ring-gray-200"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
