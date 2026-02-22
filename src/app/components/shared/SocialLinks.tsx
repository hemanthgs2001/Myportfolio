import Link from 'next/link'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaYoutube,
  FaDev 
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/hemanthgs2001', color: 'hover:text-gray-900' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername', color: 'hover:text-pink-600' },
]

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 dark:text-gray-400 ${link.color} transition-colors hover:scale-110 transform duration-200`}
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  )
}