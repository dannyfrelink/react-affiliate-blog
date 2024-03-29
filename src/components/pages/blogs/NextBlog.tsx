import React from "react";
import { Destination } from "../../../pages/blogs/BlogOverview";
import { useAppContext } from "../../../config/AppContext";
import { Link } from "react-router-dom";
import BaseText from "../../typography/BaseText";
import H3 from "../../typography/H3";

interface NextBlogProps {
	blog: Destination;
	size?: "small" | "large";
}

const NextBlog: React.FC<NextBlogProps> = ({ blog, size = "small" }) => {
	const { screenSize } = useAppContext();
	const coverImage = require(`../../../assets/pages/blogposts/${blog.coverImage.src}`);

	return (
		<Link to={`/indonesie/${blog.href}`} className="relative block">
			<div className="absolute bottom-0 w-full rounded-2xl h-full opacity-60 bg-gradient-to-t from-gray-700 via-transparent via-80% to-gray-400"></div>
			<img
				className="rounded-2xl w-full h-full max-h-[400px] object-cover object-center"
				src={coverImage}
				alt={blog.coverImage.alt}
			/>
			{size === "small" ? (
				<BaseText
					className={`absolute z-10 font-semibold text-primary ${
						screenSize < 750
							? "bottom-4 inset-x-4"
							: screenSize < 1000
							? "bottom-4 inset-x-4"
							: screenSize < 1250
							? "bottom-3 inset-x-3"
							: "bottom-5 inset-x-4"
					}`}
				>
					{blog.title}
				</BaseText>
			) : (
				<H3
					className={`absolute z-10 font-semibold text-primary ${
						screenSize < 750
							? "bottom-4 inset-x-4"
							: screenSize < 1000
							? "bottom-4 inset-x-4"
							: screenSize < 1250
							? "bottom-3 inset-x-3"
							: "bottom-5 inset-x-4"
					}`}
				>
					{blog.title}
				</H3>
			)}
		</Link>
	);
};

export default NextBlog;
