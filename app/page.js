import Image from "next/image"

export default function page () {
    return (
        <main className="min-h-dvh p-2 bg-gray-50">
        <div className="">
        <h1 className="font-bold text-2xl text-blue-600 flex justify-center pt-5">Welcome to velora blog were Our blogs are written by trusted authors and well known writers so that we can provide you the best blog articles tailored to meet your needs</h1>
        <div className="flex pt-10">
        <Image
             width={1253}
             height={100}
             src="/me2.jpeg"
             alt="blog-image"
             className="w-full"
             />
        </div>
             <p className="font-bold text-blue-600 test-sm">Discover stories, insights, and inspiration — all in one place.
             At velora blog, we explore topics that matter — from tech trends and creative thinking to personal growth, sports and real-life experiences. Whether you're here to learn something new, unwind with a story, or find motivation, there's something for everyone.</p>
             <p className="font-bold text-blue-600 text-2xl flex justify-center pt-10">Hi, I’m Sam, a web developer sharing thoughts on codes, creativity and insights to real life experiences.</p>
             <p className="text-4xl font-bold text-blue-600 pt-10">Velora blog is a powerful app for professional publishers to create, share, and grow a business around their content. It comes with modern tools to build a website, publish content and many more.</p>
             <h2 className="font-bold text-3xl flex pt-5 text-blue-600 p">Publish by web & email newsletter.</h2>
             <div className="flex pt-10 pr-5">
             <Image
             width={700}
             height={50}
             src="/photo.jpeg"
             alt="blog-image"/>
             <div className="flex pr-5">
             <Image
             width={700}
             height={70}
             src="/OIP (2).jpg"
             alt="blog-image"/>
             </div>
             </div>
             <p className="font-bold text-2xl flex justify-centrer pt-10 text-blue-600">An editor built from the ground-up for professionals. Calm by design, with advanced workflows by default. No more suffering through clumsy toolbars or drag & oops. Immerse yourself in the story with an interface that's invisible until you need it, and powerful when you do.</p>
             
        </div>
        </main>
    )
}