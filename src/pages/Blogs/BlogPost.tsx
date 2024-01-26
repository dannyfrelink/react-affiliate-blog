import { useParams } from "react-router-dom";
import SideBar from "../../components/pages/blogs/SideBar";
import data from "../../data/blogs.json";
import { BlogsData, Destination } from "./BlogOverview";
import Header from "../../components/header/Header";
import Footer from "../../components/general/Footer";
import BlogContent from "../../components/pages/blogs/BlogContent";
import { useAppContext } from "../../config/AppContext";
import BottomBar from "../../components/pages/blogs/BottomBar";
import { Helmet } from "react-helmet-async";
import ScrollBar from "../../components/general/ScrollBar";

const BlogPost = () => {
	const { screenSize } = useAppContext();
	const { href } = useParams();
	const blogs: BlogsData = data.blogs;
	const allBlogs: Destination[] = [];
	Object.values(blogs).map((blog) => blog.map((b) => allBlogs.push(b)));
	const blog = allBlogs.filter((b) => b.href === href)[0];
	const coverImage = require(`../../assets/pages/blogposts/${blog.coverImage.src}`);
	const images = blog.images;
	const sections = Object.values(blog.content);

	return (
		<ScrollBar>
			<div>
				<Helmet>
					<title>{blog.title}</title>
					<meta name="description" content={blog.metaDesc} />
				</Helmet>

				<Header
					Image={() => (
						<img src={coverImage} alt={blog.coverImage.alt} />
					)}
					title={blog.title}
					subTitle={blog.date}
					size="small"
					align="bottom"
					isBlog
				/>

				<main className="relative">
					<div
						className={`max-w-[1800px] mx-auto ${
							screenSize > 1000 && "flex flex-row-reverse"
						} ${
							screenSize > 1800 &&
							"before:absolute before:inset-0 before:bg-primary before:rounded-2xl"
						}`}
					>
						{screenSize >= 1000 && (
							<SideBar blogs={allBlogs} href={href} />
						)}

						<article
							className={`z-[1] relative ${
								screenSize < 1000
									? "[&>section:last-child]:!rounded-b-none"
									: `[&>section]:rounded-none [&>section:first-child]:rounded-tl-2xl ${
											screenSize < 1250
												? "w-4/6"
												: screenSize < 1500
												? "w-[70%]"
												: "w-[72.5%]"
									  }`
							}`}
						>
							{sections.map((section, index) => {
								const text = section && section.text;

								return (
									<BlogContent
										key={index}
										index={index}
										image={section && section.image}
										text={text}
										images={images}
										blog={blog}
									></BlogContent>
								);
							})}
						</article>
					</div>
				</main>

				<BottomBar blogs={allBlogs} href={href} />

				<Footer />
			</div>
		</ScrollBar>
	);
};

export default BlogPost;
