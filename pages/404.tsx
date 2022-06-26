import type { Locale } from '@types'
import type { GetStaticProps } from 'next'

const FourOhFour = ({ data: { locale } }) => {
  return <div>404</div>
}

export const getStaticProps: GetStaticProps<{}, { locale: Locale }> = async ({
  locale,
  preview,
}) => ({
  props: {
    data: locale,
  },
  revalidate: 600,
})

export default FourOhFour
