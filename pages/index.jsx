import {getAllPosts} from "../lib/articles";
import Image from "next/image";
import Link from "next/link";

export default function Home({posts}) {
    console.log(posts)
    return (
        <div className="mt-5">
            {posts.map((post, index) => (
                <Link href={'/blog/' + post.slug} key={index}>
                    <div className="card mb-3 pointer" style={{maxWidth: '540px'}}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{post.frontMatters.title}</h5>
                                    <p className="card-text">{post.frontMatters.description}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{post.frontMatters.date}</small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 m-auto">
                                <Image
                                    src={post.frontMatters.thumbnailUrl}
                                    className="img-fluid mt-1 rounded-start"
                                    alt="thumbnail"
                                    width={500}
                                    height={400}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export const getStaticProps = async () => {
    const posts = await Promise.all(await getAllPosts())
    return {
        props: {
            posts,
        }
    }
}