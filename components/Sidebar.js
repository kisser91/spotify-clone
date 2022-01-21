import {HomeIcon,SearchIcon,LibraryIcon, HeartIcon, RssIcon, PlusCircleIcon} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className=' p-5 text-gray-500 text-sm border-r border-gray-900'>
        <div className='space-y-4' >
            <button className='flex items-center hover:text-white space-x-2'>
                <HomeIcon className='h-5 w-5' />
                <p>Home</p>
            </button>
            <button className='flex items-center hover:text-white space-x-2'>
                <SearchIcon className='h-5 w-5' />
                <p>Search</p>
            </button>
            <button className='flex items-center hover:text-white space-x-2'>
                <LibraryIcon className='h-5 w-5' />
                <p> Your Library</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-900' />
            <button className='flex items-center hover:text-white space-x-2'>
                <PlusCircleIcon className='h-5 w-5' />
                <p>Create Playlist</p>
            </button>
            <button className='flex items-center hover:text-white space-x-2'>
                <HeartIcon className='h-5 w-5' />
                <p> Your Library</p>
            </button>
            <button className='flex items-center hover:text-white space-x-2'>
                <RssIcon className='h-5 w-5' />
                <p>Your episodes</p>
            </button>
            <hr className='border-t-[0.1px] border-gray-900' />
            {/* Playlist... */}
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>
            <p className='cursor-pointer hover:text-white '>Playlist name...</p>

        </div>
    </div>
  )
}

export default Sidebar;
