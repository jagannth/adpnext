'use client'
import Link from 'next/link';
import { useRef, useState } from 'react'

// import { createTheme } from '@uiw/codemirror-themes';
// import { tags as t } from '@lezer/highlight';

// import { xcodeLight, xcodeLightInit, xcodeDark, xcodeDarkInit } from '@uiw/codemirror-theme-xcode';

function Banner(props) {
    const courses = [
        { _id: 1, name: 'HTML', route_name: '/html' },
        { _id: 2, name: 'CSS', route_name: '/css' },
        { _id: 3, name: 'SASS', route_name: '/sass' },
        { _id: 4, name: 'Bootstrap', route_name: '/bootstrap' },
        { _id: 5, name: 'Tailwind css', route_name: '/tailwind_css' },
        { _id: 6, name: 'Pure css', route_name: '/pure_css' },
        { _id: 7, name: 'Ant design', route_name: '/ant_design' },
        { _id: 8, name: 'Semantic UI', route_name: '/semantic_ui' },
        { _id: 9, name: 'Materialize', route_name: '/materialize' },
        { _id: 10, name: 'JavaScript', route_name: '/javascript' },
        { _id: 11, name: 'JQuery', route_name: '/jquery' },
        { _id: 12, name: 'ReactJs', route_name: '/reactjs' },
        { _id: 13, name: 'React-Native', route_name: '/react-native' },
        { _id: 14, name: 'Angular', route_name: '/angular' },
        { _id: 15, name: 'VueJs', route_name: '/vuejs' },
        { _id: 16, name: 'NextJs', route_name: '/nextjs' },
        { _id: 17, name: 'ExpressJs', route_name: '/expressjs' },
        { _id: 18, name: '.Net', route_name: '/.net' },
        { _id: 19, name: 'Java', route_name: '/java' },
        { _id: 20, name: 'Python', route_name: '/python' },
        { _id: 21, name: 'Php', route_name: '/php' },
        { _id: 22, name: 'NodeJs', route_name: '/nodejs' },
        { _id: 23, name: 'C', route_name: '/c' },
        { _id: 24, name: 'C++', route_name: '/C++' },
        { _id: 25, name: 'C#', route_name: '/c#' },
        { _id: 26, name: 'F#', route_name: '/f#' },
        { _id: 27, name: 'VB.Net', route_name: '/vb.net' },
        { _id: 28, name: 'Azure', route_name: '/azure' },
        { _id: 29, name: 'AWS', route_name: '/aws' },
        { _id: 30, name: 'SQL', route_name: '/sql' }
    ]
    const scrollRef = useRef<HTMLDivElement>(null);

    const [currentCourse, setCurrentCourse] = useState('');

    const scrollLeft = () => {
        if (scrollRef.current !== null)
            scrollRef.current.scrollLeft -= 100;
    };

    const scrollRight = () => {
        if (scrollRef.current !== null)
            scrollRef.current.scrollLeft += 100;
    };

    return (
        <div className='fixed-top mt-5 pt-1 z-3 bg-body border-bottom border-3 border-success'>
            {/* <div className='fixed-top mt-5 pt-1 z-3 bg-success' data-bs-theme='dark'> */}
            <div className='container-fluid nav-scroller'>
                <div onClick={scrollLeft}><i className="bi bi-chevron-double-left me-2"></i></div>
                <nav className="pb-1 nav nav-underline justify-content-between" ref={scrollRef}>
                    <Link href='/alltutorials' className="nav-item nav-link link-body-emphasis p-0">ALL </Link>
                    {courses.map((x, xindex) => {
                        //  onClick={() => { onCourseChange(x?.route_name) }}
                        return <Link href={x?.route_name} key={'ban_' + xindex} className={x?.route_name == currentCourse ? 'nav-item nav-link link-body-emphasis p-0 active' : 'nav-item nav-link link-body-emphasis p-0'}>{x?.name}</Link>
                    })}
                </nav>
                <div onClick={scrollRight}><i className="bi bi-chevron-double-right ms-2"></i></div>
            </div>
        </div>
    )

    // const myTheme = createTheme({
    //   dark: 'dark',
    //   settings: {
    //     background: '#000000',
    //     foreground: '#4D4D4C',
    //     caret: '#F39C0E',
    //     selection: '#D6D6D6',
    //     selectionMatch: '#D6D6D6',
    //     gutterBackground: '#000000',
    //     gutterForeground: '#4D4D4C',
    //     gutterBorder: '#dddddd',
    //     gutterActiveForeground: '',
    //     lineHighlight: '#EFEFEF',
    //   },
    //   styles: [
    //     { tag: t.comment, color: '#787b80' },
    //     { tag: t.definition(t.typeName), color: '#194a7b' },
    //     { tag: t.typeName, color: '#194a7b' },
    //     { tag: t.tagName, color: '#008a02' },
    //     { tag: t.variableName, color: '#1a00db' },
    //   ],
    // });
}

export default Banner;