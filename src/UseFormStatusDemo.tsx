import { useFormStatus } from 'react-dom'

const Button = () => {
  const status = useFormStatus()
  console.log(status)
  // action
  // data
  // method
  // pending

  return <button>送信</button>
}

const Input = () => {
  return <input type="text" name="name" />
}

export const UseFormStatusDemo = () => {
  return (
    <>
      <form className="card">
        <Input />
        <Button />
      </form>
    </>
  )
}
