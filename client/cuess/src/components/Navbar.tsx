"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "journey", label: "Journey" },
	{ id: "events", label: "Events" },
	{ id: "join", label: "Join" },
];

export default function Navbar() {
	const [active, setActive] = useState("home");

	useEffect(() => {
		const obs = new IntersectionObserver(
			(entries) => {
				const vis = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (vis?.target?.id) setActive(vis.target.id);
			},
			{ rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.4, 0.6] }
		);
		links.forEach((l) => {
			const el = document.getElementById(l.id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);

	return (
		<div className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none">
			<div
				className="
          pointer-events-auto flex items-center gap-2 rounded-full border border-black/10
          bg-white/70 backdrop-blur px-3 py-2 shadow-[0_8px_28px_-12px_rgba(0,0,0,.25)]
          max-w-[95vw] sm:max-w-none
        "
			>
				<a
					href="#home"
					className="flex items-center gap-2 px-2 py-1.5 font-semibold"
				>
					<Image
						src="/cuess_logo.png" // put cuess_logo.png inside /public
						alt="CUESS"
						width={22}
						height={22}
						className="rounded-[6px]"
					/>
					<span className="text-[#1E63FF]">CUESS</span>
				</a>
				<div className="h-5 w-px bg-black/10 mx-1" />
				<div className="flex gap-2 overflow-x-auto no-scrollbar md:overflow-visible">
					{links.map((l) => (
						<a
							key={l.id}
							href={`#${l.id}`}
							className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
								active === l.id
									? "bg-blue-600 text-white"
									: "text-slate-700 hover:bg-slate-100"
							}`}
						>
							{l.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}