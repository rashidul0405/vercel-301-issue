import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

const Iframe = ({ data: { slug } }) => {
  const { locale } = useRouter()

  return (
    <div>
      Iframe {slug} - {locale}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{}, { slug: string }> = async ({
  locale,
  preview,
  params,
}) => {
  return {
    props: {
      data: { slug: params?.slug },
    },
    revalidate: 60,
  }
}

export default Iframe
