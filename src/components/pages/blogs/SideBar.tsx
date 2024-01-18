import React, { useEffect, useRef, useState } from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";
import NextBlogs from "./NextBlogs";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import H3 from "../../typography/H3";
import TableOfContents from "./TableOfContents";
import Socials from "./Socials";

interface SideBarProps {
	blogs: Destination[];
	id: number;
}

const SideBar: React.FC<SideBarProps> = ({ blogs, id }) => {
	const { screenSize, scrolled, scrolledUp } = useAppContext();
	const activeBlog = blogs.filter((blog) => blog.id === id)[0];

	const [sideBarSticky, setSideBarSticky] = useState<boolean>(false);
	const sideBarRef = useRef(null);
	useEffect(() => {
		const handleScroll = () => {
			const sidebar = sideBarRef.current;

			if (sidebar) {
				const { offsetTop, offsetHeight } = sidebar;

				if (window.scrollY > offsetTop + offsetHeight) {
					setSideBarSticky(true);
				} else {
					setSideBarSticky(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Container
			containerRef={sideBarRef}
			className={`h-full rounded-none rounded-tr-2xl	${
				sideBarSticky && `sticky top-0`
			} ${screenSize < 1250 ? "!w-2/6 !px-10" : "!px-12"} w-[30%] ${
				screenSize >= 1500 && "!px-16 !w-1/4"
			}`}
		>
			<div className={`[&>*:not(:last-child)]:mb-10`}>
				<TableOfContents headers={activeBlog.headers} />

				<div>
					<H3 className="mb-4">Volg ons op</H3>
					<Socials />
				</div>

				<div>
					<H3
						className={`text-center ${
							screenSize < 750
								? "mb-3"
								: screenSize < 1000
								? "mb-4"
								: `!text-left ${
										screenSize < 1250 ? "mb-4" : "mb-5"
								  }`
						}`}
					>
						Ontdek meer
					</H3>

					<NextBlogs blogs={blogs} id={id} />
				</div>
			</div>
		</Container>
	);
};

export default SideBar;
