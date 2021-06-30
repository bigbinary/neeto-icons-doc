import React from "react";

export default function Header({ searchTerm, setSearchTerm }) {
	return (
		<>
			<header className="flex items-center justify-between px-8 py-4">
				<div>
					<h1 className="text-2xl font-bold">neetoIcons</h1>
					<div className="text-sm text-gray-500">
						Click on an icon to copy the name.
					</div>
				</div>
				<input
					placeholder="Search for an icon"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="px-4 py-2 text-sm rounded w-72 bg-gray-50 focus:outline-none focus:bg-gray-100"
				/>
			</header>
		</>
	);
}
