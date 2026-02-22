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
    name: "Mani",
    position: "SeniorSoftware Developer & Tech Lead, Hachitha Solutions India Private Limited",
    text: "[Your Name] brought valuable insights to our team. Their code quality is excellent, and they're always willing to help others. Any team would be lucky to have them.",
    avatar: "/images/testimonials/mike.jpg"
  },
  {
    id: 2,
    name: "Preethi MS",
    position: "Software Developer, Hachitha Solutions India Private Limited",
    text: "Working with [Your Name] was an absolute pleasure. Their technical expertise and attention to detail exceeded our expectations. They delivered a complex project ahead of schedule and were always responsive to feedback.",
    avatar: "/images/testimonials/john.jpg"
  },
  {
    id: 3,
    name: "Suprith ",
    position: "Software Developer, Hachitha Solutions India Private Limited",
    text: "I've worked with many developers, but [Your Name] stands out for their ability to understand business requirements and translate them into elegant technical solutions. They're a true professional.",
    avatar: "/images/testimonials/sarah.jpg"
  },
  {
    id: 4,
    name: "Vidhya Shree MN",
    position: "Software Developer, Hachitha Solutions India Private Limited",
    text: "[Your Name] brought valuable insights to our team. Their code quality is excellent, and they're always willing to help others. Any team would be lucky to have them.",
    avatar: "/images/testimonials/mike.jpg"
  }
]