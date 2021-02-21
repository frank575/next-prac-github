import { Button } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'

const App = () => {
  const router = useRouter()
  const gotoB = () => router.push({
    pathname: '/b',
    query: {
      id: 2
    },
  })
  return <div>
    {/* as 為路由映射 */}
    <Link href={'/a?id=1'} as={'/a/1'}>
      <Button type={'primary'}>a btn</Button>
    </Link>
    <Button type={'primary'} onClick={gotoB}>b btn</Button>
  </div>
}

export default App
