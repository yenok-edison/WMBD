import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
            <Image
                // src="/images/logo/logo.svg"
                src="/images/logo/WMBD-Website.png"
                alt="logo"
                width={180}
                height={50}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:hidden'
                />
            <Image
                // src="/images/footer/footer-logo-white.svg"
                src="/images/logo/WMBD-Website.png"
                alt="logo"
                width={180}
                height={50}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
