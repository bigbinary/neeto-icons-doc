import React from "react";

export default function Header({ searchTerm, setSearchTerm }) {
	return (
		<>
			{/* <nav className="w-full px-8 py-4 bg-gray-50">
      <h1 className="text-2xl font-bold">neetoIcons</h1>
    </nav> */}

			<header className="flex items-center justify-between px-8 py-4">
				<h1 className="text-2xl font-bold">neetoIcons</h1>
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
