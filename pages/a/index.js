const A = ({ id }) => {
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
