import Link from 'next/link';

import TextEditor from '../../components/TextEditor';
import TextareaAutosize from 'react-textarea-autosize';

export default function create() {
    return (
        <div className='max-w-3xl mx-auto flex flex-col'>

            <div className='grow flex flex-col scroll-view'>
                <div className='flex justify-between items p-2 md:py-4 md:px-0'>
                    <h2 className='text-2xl font-bold text-gray-900'>Draft</h2>
                    <Link href="/">
                        <a className='btn btn-sm btn-square btn-outline border-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </a>
                    </Link>
                </div>

                <div className='border md:rounded-lg h-full max-h-full flex flex-col overflow-y-scroll'>
                    <div className='bg-white p-2 md:py-4 md:px-8'>
                        <TextareaAutosize className='text-4xl font-bold w-full max-w-full outline-0 resize-none' placeholder='Post title...' />
                    </div>

                    <TextEditor />
                </div>
            </div>


            <div className='p-2 md:py-4 md:px-0'>
                <button className="btn">Publish</button>
                <button className="btn btn-ghost">Save Draft</button>
            </div>

        </div>
    )
}
