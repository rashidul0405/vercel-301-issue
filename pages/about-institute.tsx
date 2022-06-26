import type { Locale } from '@types'
import type { GetStaticProps } from 'next'

const About = ({ data: { locale } }) => {
  return <div>About {locale}</div>
}

export const getStaticProps: GetStaticProps<{}, { locale: Locale }> = async ({
  locale,
  preview,
}) => ({
  props: {
    data: locale,
  },
  revalidate: 60,
})

export default About
