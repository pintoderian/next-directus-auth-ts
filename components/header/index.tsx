import { UserAuthenticated } from "@/types/next-auth"
import UserArea from "./_children/userarea"
import BtnMenu from "./_children/btn-menu"
import BtnTheme from "./_children/btn-theme"

export default function Header({ user }: { user: UserAuthenticated }) {
  return (
    <header className="sticky top-0 z-10 flex w-full border-b bg-background">
      <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="lg:hidden">
            <BtnMenu />
          </div>
        </div>
        <div className="2xsm:gap-7 flex items-center gap-3">
          <BtnTheme />
          {user && <UserArea user={user} />}
        </div>
      </div>
    </header>
  )
}
