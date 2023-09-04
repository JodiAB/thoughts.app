// Make sure to import the necessary components and dependencies
import { OrganizationSwitcher, SignedIn, SignOutButton, ClerkProvider } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";

function Topbar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Thoughts</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        {/* Ensure your application is wrapped in ClerkProvider */}
       
          {/* The OrganizationSwitcher component */}
          <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
                          organizationSwitcherTrigger: "py-2 px-4",
                        },
                      }}
          />
        
      </div>
    </nav>
  );
}

export default Topbar;
