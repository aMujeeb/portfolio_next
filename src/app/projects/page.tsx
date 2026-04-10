'use client';

import ProjectItem from "../components/project";
import { useLanguage } from "../context/LanguageContext";

const Projects = () =>  {
    const { t } = useLanguage();

    return (
        <div className="p-4 flex flex-col justify-start gap-4">
            {t.projects.projectList.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
}

export default Projects;