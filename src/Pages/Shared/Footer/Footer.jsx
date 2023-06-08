import { Link } from 'react-router-dom';
import footerLogo from '../../../assets/logo/footer-logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer justify-items-center md:justify-items-start p-10 bg-[#100F1F] text-white">
                <div>
                    <img src={footerLogo} alt="" />
                    <p className='text-center'>Art School<br />Providing art-skills since 2020</p>
                </div>
                <div className='justify-items-center md:justify-items-start'>
                    <span className="footer-title">Important Links</span>
                    <Link className='link-hover' to='/'>Home</Link>
                    <Link className='link-hover' to='/instructors'>Instructors</Link>
                    <Link className='link-hover' to='/classes'>Classes</Link>
                    <Link className='link-hover' to='/dashBoard'>Dashboard</Link>
                </div>
                <div className='justify-items-center md:justify-items-start'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                </div>
                <div className='justify-items-center'>
                    <span className="footer-title">Contact</span>
                    <div className='flex gap-3'>
                        <a ><FaFacebook size='2em'></FaFacebook></a>
                        <a ><FaGithub size='2em'></FaGithub></a>
                        <a ><FaInstagram size='2em'></FaInstagram></a>
                        <a ><FaTwitter size='2em'></FaTwitter></a>
                    </div>
                </div>

            </footer>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content justify-center text-center">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>

            </footer>
        </>
    );
};

export default Footer;