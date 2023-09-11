'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Header(props) {
    const logo = '/images/logo.svg';
    const toggleTheme = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
    useEffect(() => {
        var _theme = localStorage.getItem('theme');
        if (_theme == 'dark') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            (document.getElementById('flexSwitchCheckDefault')).click();
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [])
    return (
        <><nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top py-0 shadow-sm">
            <div className={props?.name == 'home' ? 'container' : 'container-fluid'}>
                {props?.name != 'home' ?
                    <div className="bd-navbar-toggle">
                        <button className="navbar-toggler p-2 border-0" type="button" data-bs-toggle={props?.name == 'home' ? ' ' : 'offcanvas'} data-bs-target="#bdSidebar"
                            aria-controls="bdSidebar" aria-label="Toggle docs navigation">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi" fill="currentColor"
                                    viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div> : <></>
                }
                <Link className="navbar-brand" href='/'>
                    <Image src={logo} alt="additional sheet" height={40} width={40} />
                    <span className='h6 ps-2'>Additional Sheet</span>
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/alltutorials">All Tutorials</Link>
                        </li>
                        {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/tools">Tools</Link>
              </li> */}
                        {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/blog">Articles</Link>
              </li> */}
                        {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Projects</Link>
              </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex pt-1" role="search">
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                <i className="bi bi-brightness-high-fill"></i> / <i className="bi bi-moon-fill"></i>
                            </label>
                            <input className="form-check-input" type="checkbox" onChange={(e) => toggleTheme(e)} role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </form>
                </div>
            </div>
        </nav></>
    )
}
