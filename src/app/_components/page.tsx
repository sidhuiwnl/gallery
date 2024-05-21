import { SignedIn, SignedOut, UserButton,SignInButton } from "@clerk/nextjs"
import SimpleUploadButton from "./simple-upload-button";
export function NavBar(){
 
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
       
  
  
        <div className="flex flex-row gap-4 items-center">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <SimpleUploadButton/>
                <UserButton/>
            </SignedIn>

        </div> 
      </nav>
    )
  }