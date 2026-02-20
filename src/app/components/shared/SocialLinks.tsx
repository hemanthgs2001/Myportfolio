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
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername', color: 'hover:text-gray-900' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourusername', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername', color: 'hover:text-pink-600' },
  { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/@yourusername', color: 'hover:text-red-600' },
  { name: 'Dev.to', icon: FaDev, url: 'https://dev.to/yourusername', color: 'hover:text-gray-900' },
  { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/yourusername', color: 'hover:text-yellow-600' },
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