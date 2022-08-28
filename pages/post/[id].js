import Head from 'next/head';
import prisma from '../../lib/prisma';

import Header from '../../components/Header';

export default function post({ post }) {
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Header />
            <div className='max-w-4xl mx-auto md:py-8'>

                <div className='md:rounded-lg border'>
                    <div className='p-4 md:py-8 md:px-16 bg-white md:rounded-t-lg'>
                        <div className="flex items-center mb-2 md:mb-4">
                            <img className="object-cover w-10 h-10 mr-4 rounded-full" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                            <div className="flex flex-col">
                                <a className="font-bold text-gray-700 cursor-pointer">{post.author}</a>
                                <span className="text-sm font-light text-gray-600">Mar 10, 2019</span>
                            </div>
                        </div>

                        <h1 className='text-3xl md:text-5xl font-bold'>{post.title}</h1>

                    </div>

                    <div className='bg-white p-4 md:py-8 md:px-16 ql-editor md:rounded-b-lg' dangerouslySetInnerHTML={{ __html: post.content }}>

                    </div>

                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {

    const posts = await prisma.post.findMany();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });

    return { props: { post } }
}