export interface Testimonial {
  id: number
  name: string
  position: string
  text: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, Tech Company",
    text: "Working with [Your Name] was an absolute pleasure. Their technical expertise and attention to detail exceeded our expectations. They delivered a complex project ahead of schedule and were always responsive to feedback.",
    avatar: "/images/testimonials/john.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Product Manager, Digital Agency",
    text: "I've worked with many developers, but [Your Name] stands out for their ability to understand business requirements and translate them into elegant technical solutions. They're a true professional.",
    avatar: "/images/testimonials/sarah.jpg"
  },
  {
    id: 3,
    name: "Mike Chen",
    position: "Tech Lead, Startup",
    text: "[Your Name] brought valuable insights to our team. Their code quality is excellent, and they're always willing to help others. Any team would be lucky to have them.",
    avatar: "/images/testimonials/mike.jpg"
  }
]