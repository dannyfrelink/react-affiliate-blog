import React, { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import H4 from "../typography/H4";
import { useLocation } from "react-router";

interface DetailsProps {
	children: React.ReactNode;
	className?: string;
	summary: string;
	summaryClass?: string;
}

const Details: React.FC<DetailsProps> = ({ children, summary }) => {
	const [open, setOpen] = useState<boolean>(false);
	const location = useLocation();
	const [oldLocation, setOldLocation] = useState<string>();

	useEffect(() => {
		!oldLocation && setOldLocation(location.pathname);

		if (oldLocation !== location.pathname) {
			setOpen(false);
			setOldLocation(location.pathname);
		}
	}, [oldLocation, location]);

	return (
		<section className="bg-secondary w-fit rounded-2xl text-primary">
			<button
				className="flex justify-between items-center py-2 px-4"
				onClick={() => setOpen(!open)}
			>
				<H4 className="" color="white">
					{summary}
				</H4>

				{open ? (
					<KeyboardArrowUpRoundedIcon
						className="!max-h-7"
						fontSize="large"
						color="inherit"
					/>
				) : (
					<KeyboardArrowDownRoundedIcon
						className="!max-h-7"
						fontSize="large"
						color="inherit"
					/>
				)}
			</button>

			<div className={`${open ? `block` : "hidden"}`}>{children}</div>
		</section>
	);
};

export default Details;
