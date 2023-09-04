import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {

     const user = await currentUser();
    // if (!user) return null; // to avoid typescript warnings
  
    // const user = await fetchUser(user.id);
    // if (user?.onboarded) redirect("/");
  
     const userData = {
       id: user?.id,
       objectId: user?._id,
       username: user?.username || user?.username,
       name: user?.name || user?.firstName || "",
       bio: user?.bio || "",
       image: user?.image || user?.imageUrl,
     };   
    return (
        <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
          <h1 className='head-text'>Onboarding</h1>
          <p className='mt-3 text-base-regular text-light-2'>
            Complete your profile now, to use Thoughts.
          </p>
    
          <section className='mt-9 bg-dark-2 p-10'>
            <AccountProfile user={userData} btnTitle='Continue' />
          </section>
        </main>
      );
    }
    
  
    export default Page;
    