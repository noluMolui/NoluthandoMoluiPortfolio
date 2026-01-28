import React from "react";


export default function ProjectCard({ title, image, description, stack }) {
return (
<div className="project-card">
<img src={image} alt={title} />
<div className="project-body">
<h4>{title}</h4>
<p>{description}</p>
<span>{stack}</span>
</div>
</div>
);
}