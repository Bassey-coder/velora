import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization-check"
import CreatePost from "./create-post"

export default async function () {
    const session = await auth();
    return(
        <>
        <AuthorizationCheck/>
        <CreatePost userId={session?.user?.id}/>
       </>
    )
}