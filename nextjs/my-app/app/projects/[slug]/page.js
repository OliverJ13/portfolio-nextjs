import {projects} from "@/app/data/projects.js"

export default function ProjectPage({ params}) {
    const project = projects.find((project) => project.slug === params.slug)

    if (!project) {
        return <h1>Project Not Found</h1>
    }

    return (
        <main>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </main>
    )
}
