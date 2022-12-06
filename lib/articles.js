import path from "path";
import matter from "gray-matter";
import fs from "node:fs/promises";

export const getAllPosts = async () => {
    const filenames = await fs.readdir(path.join('posts'), 'utf-8')
    const posts = filenames.map(async (filename) => {
        const fileWithMetas = await fs.readFile(path.join('.', 'posts', filename), 'utf-8')
        const {data: frontMatters} = matter(fileWithMetas)

        return {
            frontMatters,
            slug: filename.split('.')[0],
        }
    })

    return posts
}