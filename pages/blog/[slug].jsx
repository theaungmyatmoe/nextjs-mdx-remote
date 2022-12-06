import React from 'react';
import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../../components/Button";

const components = {SyntaxHighlighter, Button}

const BlogPageById = ({metas, mdxSource}) => {
    return (<div className="mt-4">
        <h1>{metas.title}</h1>
        <MDXRemote {...mdxSource} components={components}/>
    </div>);
};

export default BlogPageById;

export const getStaticPaths = async () => {
    const filenames = fs.readdirSync(path.join('posts'))

    const paths = filenames.map(filename => {
        return {
            params: {
                slug: filename.replace('.mdx', '')
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
    const {data: metas, content} = matter(markdownWithMeta)

    const mdxSource = await serialize(content)

    return {
        props: {
            metas,
            mdxSource
        }
    }
}