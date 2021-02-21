import { useRouter } from 'next/router'
import { useEffect } from 'react/cjs/react.production.min'

const A = ({ id }) => {
  // useEffect(() => {
  //   console.log(router.query)
  // }, [])
  return <div>
    a/index/{id}
  </div>
}

export async function getServerSideProps ({query}) {
  return {
    props: { id: query.id }
  }
}

export default A
