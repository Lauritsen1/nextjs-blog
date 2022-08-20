import { useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

import TextEditor from '../../components/TextEditor';
import TextareaAutosize from 'react-textarea-autosize';

export default function create() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Mike Oxlong');

    useEffect(() => {
        console.log(title);
        console.log(content);
    }, [title, content])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = { title, content, author }

        if (!title) {
            toast.error('Title cant be blank', {
                position: "top-center",
                theme: "colored"
            });
            return
        }

        if (!content) {
            toast.error('Content cant be blank', {
                position: "top-center",
                theme: "colored"
            });
            return
        }

        try {
            await fetch('/api/posts', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-3xl mx-auto flex flex-col h-screen'>

            <div className='flex justify-between items p-2 md:py-4 md:px-0'>
                <h2 className='text-2xl font-bold text-gray-900'>Draft</h2>

                <Link href="/">
                    <a className='btn btn-sm btn-square btn-outline border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </a>
                </Link>
            </div>

            <div className='border md:rounded-lg flex flex-col h-full overflow-y-scroll'>

                <div className='bg-white p-2 md:py-4 md:px-8'>
                    <TextareaAutosize className='text-4xl font-bold w-full max-w-full outline-0 resize-none' placeholder='Post title...' value={title} onChange={(e) => setTitle(e.target.value)} />
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
