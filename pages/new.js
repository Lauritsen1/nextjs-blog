import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import TextEditor from '../components/TextEditor';
import TextareaAutosize from 'react-textarea-autosize';

export default function create() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Mike Oxlong');
    const [error, setError] = useState('');

    const scrollView = useRef();

    useEffect(() => {
        if (error) {
            scrollView.current.scrollTo(0, 0);
        }
    }, [error])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = { title, content, author }

        if (!title) {
            setError("Title: Can't be blank");
            return
        }

        if (!content) {
            setError("Content: Can't be blank");
            return
        }

        try {
            await fetch('/api/posts/create', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-4xl mx-auto flex flex-col h-screen'>

            <div className='flex justify-end items p-2 md:py-4 md:px-0'>

                <Link href="/">
                    <a className='btn btn-sm btn-square btn-outline border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </a>
                </Link>
            </div>

            <div className='border md:rounded-lg flex flex-col h-full overflow-y-scroll scroll-smooth' ref={scrollView}>

                {error &&
                    <div className="bg-red-300 text-red-900 p-2 md:py-4 md:px-8 flex flex-col items-start gap-2 md:gap-4">
                        <div className='flex items-center'>
                            <span className='text-lg font-bold'>Something went wrong:</span>
                        </div>
                        <ul className='list-disc list-inside flex flex-col items-start'>
                            <li>{error}</li>
                        </ul>
                    </div>
                }

                <div className='bg-white p-2 md:py-8 md:px-16'>
                    <TextareaAutosize className='text-3xl md:text-5xl font-bold w-full max-w-full outline-0 resize-none' placeholder='Post title...' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <TextEditor content={content} setContent={setContent} />
            </div>

            <div className='p-2 md:py-4 md:px-0'>
                <button className="btn mr-4">Publish</button>
                {/* <button className="btn btn-ghost">Save Draft</button> */}
            </div>

        </form>
    )
}
