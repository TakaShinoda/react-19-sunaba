import { useActionState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts'

// https://ja.react.dev/reference/react/useActionState#my-action-can-no-longer-read-the-submitted-form-data
const addPost = async (currentState: unknown, formData: FormData) => {
  console.log(currentState)

  const name = formData.get('name')
  console.log(name)

  const res = await fetch(url, {
    method: 'POST',
  })
  const data = await res.json()
  return data
}

export const UseActionStateDemo = () => {
  const [state, submitAction, isPending] = useActionState(addPost, null)
  console.log(state)

  const [testState, overrideSubmitAction, isTestPending] = useActionState(
    async () => {
      console.log('--- overrideSubmitAction ---')
      console.log(testState)
      console.log(isTestPending)
      console.log('--- overrideSubmitAction ---')
    },
    null
  )

  return (
    <>
      <form action={submitAction}>
        <input type="submit" formAction={overrideSubmitAction} />
        {/* <input type="text" name="name" /> */}
        <button type="submit" disabled={isPending}>
          Post
        </button>
      </form>
    </>
  )
}
