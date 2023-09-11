import Image from "next/image";
import Link from "next/link";

export default function Footer(props) {
    const logo = '/images/banner-green.png';
  return (
    <div>
        <><footer className="bd-footer py-4 py-md-5 bg-success-subtle">
           <div className={props?.name == 'home' ? 'container' : 'container-fluid'}>
          <div className=" py-4 py-md-5 nav-link text-secondary-secondary">
                <div className="row">
                    {/* <div className="col-lg-2 text-center  mb-3">
                    
                    </div> */}
                    <div className="col-lg-2 mb-3">
                        <Link className="d-inline-flex align-items-center mb-2 nav-link text-secondary-emphasis tdn" href="/" aria-label="ADP">
                        <Image width={200} alt="footer-banner" height={100}  src={logo} />
                            {/* <span className="fs-5 mt-4">Additional Sheet</span> */}
                        </Link>
                        <ul className="list-unstyled small">
                            <li className="mb-2 d-none">Designed and developed with all the love in the world by the <Link className="nav-link text-secondary" href="/">ADS team</Link> </li>
                            <li>
                                <p>Additional Sheet is now available online to provide the best learning material on technical and non-technical subjects.</p>
                            </li>
                            {/* <li className="mb-2">Code licensed <Link className="nav-link text-secondary" to="/github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</Link>, docs <Link className="nav-link text-secondary" to="/creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</Link>.</li>
                            <li className="mb-2">Currently v5.3.1.</li> */}
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 ms-lg-5 ps-lg-5 mb-3">
                        <h5>Top Tutorials</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/">Home</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/html">HTML Tutorial</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/css">CSS Tutorial</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/javascript">JavaScript Tutorial</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/react">React Tutorial</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/angular">Angular Tutorial</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/.net">Dotnet Tutorial</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Top Examples</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/examples/html" target="_blank" rel="noopener">HTML Example</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/examples/css">CSS Example</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/examples/javascript">JavaScript Example</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/examples/react">React Example</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/examples/angular">Angular Example</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/examples/dotnet">Dotnet Example</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Extra as</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/templates/all">Starter template</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/templates/html">HTML Templates</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/templates/c">C# Compiler</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/templates/javascript">JavaScript Tools</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/qna/html">Question/Answers</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="interview/html">Interview Prepare</Link></li>
                        </ul>
                      
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>About Us</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/about" target="_blank" rel="noopener">Company</Link></li>
                            <li className="mb-2"><Link className="nav-link text-secondary" href="/about" target="_blank" rel="noopener">Out Team</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </footer></>
    </div>
  )
}
