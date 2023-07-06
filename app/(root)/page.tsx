import { UserButton } from "@clerk/nextjs"

const RootPage =() => {
  return (
    <div>
      <p>hello dashboard</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default RootPage
