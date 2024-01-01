import React from "react";
import { useAppContext } from "../../config/AppContext";
import H1 from "../typography/H1";

interface TitleProps {
	title: string;
	subTitle?: string;
	align?: string;
	size?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle, align, size }) => {
	const { screenSize } = useAppContext();

	return (
		<section
			className={`${
				screenSize < 750
					? `w-5/6 ${
							align === "center"
								? "justify-center items-center text-center"
								: "justify-end pb-5"
					  } ${size === "large" ? "h-[90vh]" : "h-[40vh]"}`
					: `h-[90vh] justify-center items-center text-center ${
							screenSize < 1250 ? "w-4/5" : "w-7/12"
					  }`
			} flex flex-col mx-auto`}
		>
			<H1>{title}</H1>

			{subTitle && (
				<p
					className={`${
						screenSize < 750
							? `text-sm ${
									align === "center"
										? "font-semibold w-3/4 mx-auto"
										: "text-[#C3C3C3]"
							  }`
							: `font-semibold mx-auto ${
									screenSize < 1250
										? "w-3/4 text-xl"
										: "w-4/6 text-2xl"
							  }`
					}`}
				>
					{subTitle}
				</p>
			)}
		</section>
	);
};

export default Title;
