import React from "react";

import Card from "./card";
//include images into your bundle

//create your first component
function Content() {
	const posts = [
		{
			title: "Piro",
			image: "https://picsum.photos/id/237/300/200",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero facilis, excepturi quod doloribus itaque sequi cupiditate impedit. Nulla, pariatur."
		},
		{
			title: "Taking",
			image: "https://picsum.photos/id/188/300/200",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem obcaecati cupiditate tempora rerum temporibus!"
		},
		{
			title: "Time ago",
			image: "https://picsum.photos/id/939/300/200",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem laudantium in quae at, nisi distinctio exercitationem, perspiciatis natus quidem possimus reprehenderit ea recusandae officiis, doloribus odit ex nemo voluptatum."
		},
		{
			title: "Redemption",
			image: "https://picsum.photos/id/756/300/200",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem obcaecati cupiditate tempora rerum temporibus!"
		}
	];
	return (
		<div className="d-flex text-center mt-5 mx-2 text-center justify-content-center ">
			{posts.map((post, i) => {
				return (
					<Card
						key={i}
						title={post.title}
						image={post.image}
						description={post.description}
					/>
				);
			})}
		</div>
	);
}

export default Content;
