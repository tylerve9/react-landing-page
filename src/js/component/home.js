import React from "react";

import Navbar from "./navbar";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
//create your first component
export function Home() {
	return (
		<div className="">
			<Navbar />
			<div className="container">
				<Header />
				<Content />
			</div>
			<Footer />
		</div>
	);
}
