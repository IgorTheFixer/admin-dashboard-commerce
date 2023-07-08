'use client'

import { Modal } from "@/components/ui/modal"
import { UserButton } from "@clerk/nextjs"

const RootPage =() => {
  return (
    <div>
      <p>hello dashboard</p>
      <Modal title="Test" description="Test Description" isOpen onClose={()=> {}}>
        Children
      </Modal>
    </div>
  )
}

export default RootPage
