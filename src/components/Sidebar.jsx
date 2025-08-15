import {
  HomeIcon,
  ChartBarIcon,
  BellIcon,
  ChartPieIcon,
  ArchiveBoxIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-center w-20 h-screen bg-white py-4 border-r-2 border-[#EFEFEF]">
      <div className="flex flex-col items-center space-y-8">
        <div className="w-10 h-10 p-2 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-sm">Logo</span>
        </div>

        <nav className="flex flex-col items-center space-y-6 text-gray-600">
          <HomeIcon className="w-6 h-6 cursor-pointer hover:text-black" />
          <ChartBarIcon className="w-6 h-6 cursor-pointer hover:text-black" />
          <BellIcon className="w-6 h-6 cursor-pointer hover:text-black" />
          <ChartPieIcon className="w-6 h-6 cursor-pointer hover:text-black" />
          <ArchiveBoxIcon className="w-6 h-6 cursor-pointer hover:text-black" />
        </nav>
      </div>
      <div className="mb-4">
        <ArrowRightOnRectangleIcon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-500" />
      </div>
    </div>
  );
}
