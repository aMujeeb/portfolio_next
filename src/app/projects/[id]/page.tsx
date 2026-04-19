'use client';

import { use } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { MouseEvent, useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProjectItemDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {

    const resolveParams = use(params);
    const projectId = resolveParams.id;
    const { t } = useLanguage();

    const [currentImage, setCurrentImage] = useState(0);

    // Find the actual project object from the language context where the ID matches
    const project = t.projects.projectList.find(({ id }: { id: string }) => id === projectId);
    
    const nextImage = (e: MouseEvent) => {
        e.stopPropagation();
        if (!project) return;
        setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e: MouseEvent) => {
        e.stopPropagation();
        if (!project) return;
        setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    };


    if (!project) {
        return notFound();
    }

    return (
        <div className="mb-4">
            <h2 className="text-amber-300 mt-4 text-3xl font-salsa">{project.name}</h2>
            <p className="text-amber-300 mt-2 text-1xl">{project.description}</p>

            <div className="mt-4 relative h-[400px] md:h-[600px] w-full max-w-5xl overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {project.images.map((src: string, index: number) => (
                        <div key={index} className="relative flex-shrink-0 w-full h-full">
                            <Image
                                src={src}
                                alt={`${project.name} screenshot ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    ))}
                </div>
                <button onClick={prevImage} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">‹</button>
                <button onClick={nextImage} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">›</button>
            </div>

            <p className="mt-2 text-1xl text-blue-600">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech: { name: string }, index: number) => (
                    <div key={index} className="px-3 py-1 bg-amber-200 border border-amber-300 rounded-full text-[10px] font-medium text-black shadow-sm">
                        {tech.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectItemDetailsPage;