import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const B = ({ hello }) => {
  const router = useRouter()
  const [rid, setRid] = useState()
  useEffect(() => {
    if (router?.query) {
      setRid(router.query.id)
    }
  }, [router])

  return <div>
    b/index/{rid} {hello}
  </div>
}

B.getInitialProps = async () => {
  // 異步(會待數據獲取完才加載畫面)
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve({
        hello: 'world'
      })
    }, 1000)
  })
  // 同步
  return {
    hello: 'world'
  }
}

export default B
