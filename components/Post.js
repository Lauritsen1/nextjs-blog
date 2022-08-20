export default function Post(props) {
    return (
        <article className="max-w-xl px-8 p-4 mx-auto bg-white md:rounded-lg shadow-md">
            <div className="flex items-center justify-between">

                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded cursor-pointer hover:bg-gray-700">Tag</a>
            </div>

            <div className="mt-4">
                <a href="#" className="text-3xl font-bold text-gray-900 hover:text-gray-700 hover:underline">{props.post.title}</a>
                {/* <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p> */}
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <img className="object-cover w-10 h-10 mr-4 rounded-full" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                    <div className="flex flex-col md:flex-row md:items-center">
                        <a className="font-bold text-gray-700 cursor-pointer">{props.post.author}</a>
                        <span className="mx-2 hidden md:inline">•</span>
                        <span className="text-sm font-light text-gray-600">Mar 10, 2019</span>
                    </div>
                </div>

                <a href="#" className="text-blue-600 hover:underline">Read more</a>
            </div>
        </article>
    )
}
