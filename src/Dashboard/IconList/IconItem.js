import React from "react";
import * as Icons from "@bigbinary/neeto-icons";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";

export default function IconItem({ name }) {
	const Icon = Icons[name];
	const copyName = () => {
		copy(name);
		toast(`${name} has been copied to clipboard.`, {
			icon: "🎉",
			style: {
				borderRadius: "4px",
				background: "#1e1e20",
				color: "#fff",
				padding: "4px 8px",
				fontSize: 14,
			},
		});
	};
	return (
		<div
			onClick={copyName}
			className="flex flex-col items-center justify-center col-span-1 p-8 transition-all transform rounded cursor-pointer bg-gray-50 hover:bg-gray-100"
		>
			<Icon size={24} color="black" />
			<div className="mt-2 text-xs text-gray-700">{name}</div>
		</div>
	);
}
