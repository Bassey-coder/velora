import { db } from "@/config/firebase.config";
import { timestampToDate } from "@/utils/timestamp-to-date";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { notFound } from "next/navigation";

async function fetchPost (postId) {
    const postRef = doc(db, "posts", postId);
    const postSnapshot =await getDoc(postRef)

    if(!postSnapshot.exists()) {
        notFound();
    }
    return {
        id: postId,
        ...postSnapshot.data(),
    }

}   
export default async function PostPage({params}) {
    const {id} = await params;
    const post = await fetchPost(id);
    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-blue-500 text-center mb-6">{post.title} </h1>
            <div className="flex justify-center">
                <Image
                src="/blog.jpeg"
                alt="postimage"
                width={600}
                height={600}
                className="rounded-lg"/>
                <p className="text-gray-600 text-center mt-4">Published on: {timestampToDate(post.timecreated)}</p>
                <article className="mt-8 text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">{post.body}</article>
            </div>
        </main>
    )
}