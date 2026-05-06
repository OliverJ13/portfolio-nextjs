import Link from "next/link"
import {projects} from "@/app/data/projects"
import Image from "next/image"

export default function ProjectsPage() {
    return(
        <main>
            <h1>Projects</h1>

            {projects.map((project) => (
                <article key={project.slug}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <Image src={project.photo.url} width={200} height={200} alt={project.photo.alt}/>
                    <Link href={`/projects/${project.slug}`}>
                    View Projects
                    </Link>
                </article>
            ))}
        </main>
    )
}