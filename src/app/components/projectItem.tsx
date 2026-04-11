import { useState } from "react";
import Image from "next/image";

const ProjectItem = ({ project }: { project: any }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    };

    return (
        <div key={project.id} className="mb-4">
            <h2 className="text-amber-300 mt-4 text-3xl font-salsa">{project.name}</h2>
            <p className="text-amber-300 mt-2 text-1xl">{project.description}</p>

            <p className="mt-2 text-1xl text-blue-600">Functionalities</p>
            <ul className="list-disc list-inside mt-2 text-amber-300">
                {project.functionality.map((func, index) => (
                    <li key={index} className="text-2xs">{func}</li>
                ))}
            </ul>

            <p className="mt-2 text-1xl text-blue-600">Tech Stack:</p>
            <p className="mt-2 text-3xs text-green-700">
                {project.technologies.map((tech) => tech.name).join(', ')}
            </p>

            <div className="mt-4 relative h-60 w-140 overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {project.images.map((src: string, index: number) => (
                        <div key={index} className="relative flex-shrink-0 w-full h-60">
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
        </div>
    );
};

export default ProjectItem;