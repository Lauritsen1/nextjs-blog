import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css';

export default function TextEditor() {

    const [value, setValue] = useState('');

    useEffect(() => {
        console.log(value);
    }, [value])


    const toolbarOptions = [
        [{ 'header': 1 }, { 'header': 2 }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block', 'image', 'link'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
    ];

    const modules = {
        toolbar: toolbarOptions
    }

    return <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />

}