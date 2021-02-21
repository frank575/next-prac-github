import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const B = () => {
  const router = useRouter()
  const [rid, setRid] = useState()
  useEffect(() => {
    if (router?.query) {
      setRid(router.query.id)
    }
  }, [router])

  return <div>
    b/index/{rid}
  </div>
}

export default B
