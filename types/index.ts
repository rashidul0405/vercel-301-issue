import type { ParsedUrlQuery } from 'node:querystring'
import type {
  StructuredTextGraphQlResponse,
  TitleMetaLinkTag,
} from 'react-datocms'

export type URLParams<T> = ParsedUrlQuery & T

export type Locale = 'en' | 'tr' | undefined | string

export type DatoImage = {
  src: string
  alt: string
  width: number
  height: number
  base64: string | undefined
}

export type DatoVideo = {
  provider: 'youtube' | 'vimeo'
  providerUid: string
}

export type STBody = StructuredTextGraphQlResponse

export type Location = {
  longitude: number
  latitude: number
}

export type Author = {
  name: string
  title: string
  picture: DatoImage
  description: STBody
}

export type InternalLink = {
  _modelApiKey: 'internal_link'
  title: string
  url: {
    _modelApiKey:
      | 'all_courses_page'
      | 'instructors_page'
      | 'certificate_page'
      | 'blog_page'
      | 'about_page'
      | 'contact_page'
      | 'blog'
      | 'contract'
      | 'course'
      | 'online_courses_category'
      | 'instructor'
      | 'certificate_verification'
      | 'statics_page'
      | 'iframe_page'
      | 'sitemap_page'
    slug: string
  }
}

export type ExternalLink = {
  _modelApiKey: 'external_link'
  title: string
  url: string
}

export type MenuLink = InternalLink | ExternalLink

export type THeader = {
  logInText: string
  logInUrl: string
  logoText: string
  searchText: string
  signUpText: string
  signUpUrl: string
  menu: InternalLink[]
}

export type TFooter = {
  logoText: string
  followText: string
  aboutTitle: string
  aboutLinks: MenuLink[]
  categoriesTitle: string
  categories: Array<Pick<CourseCategory, 'name' | 'slug'>>
  appStoreLink: string
  playStoreLink: string
  fb: string
  ig: string
  twitter: string
  linkedin: string
  copyrightText: string
  bottomLinks: MenuLink[]
}

export type CourseEvent = {
  name: string
  startDate: string
  endDate: string
}

export type Currency = 'TRY' | 'USD' | 'EUR'

export type Course = {
  _modelApiKey: 'course'
  id: string
  title: string
  slug: string
  image: DatoImage
  video: DatoVideo
  currency: Currency
  price: string
  priceDiscount: string
  lessonTopic: string
  shortDescription: string
  instructors: InstructorCard[]
  overview: STBody
  content: STBody
  faqs: Faq[]
  reviews: Comment[]
  tags: string
  courseType: string
  category: {
    name: string
  }
  documentsNumber: string
  videosNumber: string
  homeworkNumber: string
  quizNumber: string
  access: string
  certificate: STBody
  certificateImage: DatoImage
  certificateSelect: string
  language: string
  liveClass: string
  relatedCoursesText: string
  relatedCoursesTitle: string
  relatedCourses: Array<CourseCard & { instructors: InstructorCard[] }>
  startNowUrl: string
  shopifyEn: string
  averageScore: number
  totalStars: number
  onlineUsers: number
  totalStudents: number
  seo: TitleMetaLinkTag[]
  events: CourseEvent[]
}

export type CourseCard = Pick<
  Course,
  | '_modelApiKey'
  | 'id'
  | 'title'
  | 'slug'
  | 'image'
  | 'currency'
  | 'price'
  | 'priceDiscount'
  | 'videosNumber'
  | 'lessonTopic'
  | 'totalStars'
  | 'averageScore'
>

export type CourseOrdering =
  | 'totalStudents_DESC'
  | 'totalStudents_ASC'
  | 'price_DESC'
  | 'price_ASC'

export type BlogCategory = {
  id: string
  title: string
  slug: string
  featured: boolean
  seo: TitleMetaLinkTag[]
}

export type Blog = {
  _modelApiKey: 'blog'
  title: string
  slug: string
  publishedDate: string
  updatedDate: string
  image: DatoImage
  video: DatoVideo
  category: Pick<BlogCategory, 'title'>
  seo: TitleMetaLinkTag[]
  author: Author
  content: STBody
  keywords: string
  faqs: FaqMulti[]
}

export type BlogCard = Pick<
  Blog,
  '_modelApiKey' | 'title' | 'slug' | 'publishedDate' | 'image' | 'category'
>

export type CourseCategory = {
  name: string
  slug: string
  shortContent: string
  icon: DatoImage
  image: DatoImage
  content: STBody
  seo: TitleMetaLinkTag[]
  faqsTitle: string
  faqs: Faq[]
  totalCourses: number
}

export type CourseCategoryCard = Pick<
  CourseCategory,
  'name' | 'slug' | 'icon' | 'totalCourses'
>

export type Instructor = {
  name: string
  title: string
  slug: string
  image: DatoImage
  intro: STBody
  description: STBody
  location: string
  seo: TitleMetaLinkTag[]
  courses: CourseCard[]
}

export type InstructorCard = Pick<
  Instructor,
  'name' | 'title' | 'slug' | 'image' | 'intro'
>

export type Team = {
  name: string
  title: string
  image: DatoImage
  location: string
}

export type ListingPage = {
  title: string
  slug: string
  description: string
  seo: TitleMetaLinkTag[]
}

export type Contract = {
  title: string
  slug: string
  text: STBody
  seo: TitleMetaLinkTag[]
}

export type IFramePage = {
  title: string
  slug: string
  seo: TitleMetaLinkTag[]
  code: string
}

export type Faq = {
  question: string
  answer: STBody
}

export type FaqMulti = {
  question1: string
  answer1: STBody
  question2: string
  answer2: STBody
  question3: string
  answer3: STBody
}

export type Comment = {
  _modelApiKey: 'comment'
  name: string
  photo: DatoImage
  rating: number
  comment: STBody
}

export type Static = {
  id: string
  title: string
  totalUsers: string
  totalCourses: string
  quiz: string
  liveClass: string
  instructors: string
  forum: string
  enrolUsers: string
  countries: string
  seo: TitleMetaLinkTag[]
}

export type Verification = {
  slug: string
  title: string
  text1: string
  text2: string
  buttonText: string
  certificate: string
  certificateNo: string
  courseName: string
  date: string
  fullName: string
  successStatus: string
  seo: TitleMetaLinkTag[]
}
