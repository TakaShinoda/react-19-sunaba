import { useTransition } from 'react'

interface PostResponse {
  id: number
}

const url = 'https://jsonplaceholder.typicode.com/posts'

// startTransition に渡された関数。たまにエラーをスローさせる
const postData = async (): Promise<PostResponse> => {
  const num = Math.random()
  const res = await fetch(url, {
    method: 'POST',
  })
  const data = await res.json()
  console.log(num)
  if (num < 0.5) {
    return data
  } else {
    throw new Error('エラー')
  }
}

export const UseTransitionDemo = () => {
  // const [isLoading, setIsLoading] = useState(false)
  // const handlePost1Click = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { id } = await postData()
  //     console.log(typeof id)
  //   } catch (err) {
  //     console.error(err)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      try {
        const { id } = await postData()
        console.log(id)
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <>
      {/* <div className="card">
        {isLoading && <p>isLoading...</p>}
        <button onClick={handlePost1Click}>POST1</button>
      </div> */}
      <div className="card">
        {isPending && <p>isLoading...</p>}
        <button onClick={handleClick}>POST2</button>
      </div>
    </>
  )
}
