export default function Header() {
    return (
        <header className="bg-white border-b">
            <nav className="navbar max-w-7xl mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl bg-gray-900 hover:bg-gray-700 text-white">NextJS Blog</a>
                </div>
                <div className="flex-none gap-2">
                    <button className="btn btn-outline hidden md:inline hover:bg-gray-900">Create Post</button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>

                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-normal dropdown-content bg-white rounded-box w-52">
                            <li><a>@Username</a></li>
                            <hr />
                            <li><a>Dashboard</a></li>
                            <li><a>Create Post</a></li>
                            <li><a>Settings</a></li>
                            <hr />
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
