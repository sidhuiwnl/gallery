 import { SignedIn, SignedOut, UserButton,SignInButton } from "@clerk/nextjs"

export function NavBar(){
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
       
  
  
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>

        </div> 
      </nav>
    )
  }