// Main imports
import Link from "next/link"
import { Logo } from '../components/Logo'
// Icon imports
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
// Style imports
import styles from '../styles/footer.module.scss'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Logo />
                    <div className={styles.slogan}>
                        ShopLocator is an innovative app designed during a hackathon event, with the primary goal of helping users find nearby shops and explore their offerings with ease. The app is specifically tailored for the KazAeroSpace community, but its capabilities can be extended to a wider audience.
                    </div>
                </div>
                <div className={styles.pageLinks}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/shop'}>Shop</Link>
                    <Link href={'/map'}>Map</Link>
                    <Link href={'/aboutUs'}>About Us</Link>
                    <Link href={'/contacts'}>Contacts</Link>
                </div>
                <div className={styles.mediaLinks}>
                    <a href={'https://t.me/emporteme'} target="_blank"><FaTelegramPlane />Telegram</a>
                    <a href={'https://instagram.com/emporteme?igshid=ZDdkNTZiNTM='} target="_blank"><FiInstagram />Instagram</a>
                    <a href={'https://www.linkedin.com/in/magzhan-karatayev-87126b243/'} target="_blank"><FaLinkedinIn />Linkedin</a>
                    <a href={'mailto:magzhan_volk@outlook.com'} target="_blank"><SiGmail />Gmail</a>
                </div>
                <div className={styles.contacts}>
                    <a href="tel:+77766860652">+7 (776) 686 06 52</a>
                    <a href="tel:+77766860653">+7 (776) 686 06 53</a>
                    <a href="mailto:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                    <a href="mailto:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                </div>
            </div>
            <div className={styles.line} />
            <div className={styles.copyright}>
                <div>
                    <AiOutlineCopyrightCircle />
                    <div className='mainText'>Copyright.</div>
                </div>
                <div>All Hackathon rights reserved | 08.04.2023</div>
            </div>
        </div>
    )
}