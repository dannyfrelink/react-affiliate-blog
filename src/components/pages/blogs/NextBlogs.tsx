import React from "react";
import NextBlog from "./NextBlog";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import { useAppContext } from "../../../config/AppContext";

interface NextBlogsProps {
	blogs: Destination[];
	id: number;
}

function shuffleArray(array: NextBlogsProps["blogs"]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function getRandomBlogs(array: NextBlogsProps["blogs"], size: number) {
	const shuffledArray = [...array];
	shuffleArray(shuffledArray);
	return shuffledArray.slice(0, size);
}

const NextBlogs: React.FC<NextBlogsProps> = ({ blogs, id }) => {
	const { screenSize } = useAppContext();
	const optionalBlogs = blogs.filter((blog) => blog.id !== id);
	const blogsArr = getRandomBlogs(optionalBlogs, 4);

	return (
		<div
			className={`${
				screenSize < 500
					? "[&>*:not(:last-child)]:mb-6"
					: screenSize < 1000
					? "grid grid-cols-2 gap-x-3 gap-y-6"
					: "[&>*:not(:last-child)]:mb-6"
			}`}
		>
			{blogsArr.map((blog, index) => (
				<NextBlog key={index} blog={blog} />
			))}
		</div>
	);
};

export default NextBlogs;
