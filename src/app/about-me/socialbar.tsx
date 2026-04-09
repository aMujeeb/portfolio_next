import { SOCIAL_LINKS } from "./aboutMe.utils";

const SocialBar = () => {
    return (
        /*Social media container*/
        <div className="flex flex-row mt-2 justify-start gap-8 w-full p-2 bg-white">
            {
                SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.title}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-row items-center"
                    >
                        <div style={{ backgroundColor: social.backgroundColor }} className="p-3 rounded-full transition-transform group-hover:scale-110">
                            {social.icon}
                        </div>

                        <span className="absolute -bottom-6 left-full ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-zinc-900 text-white px-2 py-1 rounded">
                            {social.title}
                        </span>
                    </a>
                ))
            }
        </div>
    );
}

export default SocialBar;