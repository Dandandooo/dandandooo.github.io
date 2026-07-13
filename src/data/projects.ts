type Project = {
    title: string;
    timeframe: string;
    secondaryDate?: string;
    description: string;
    href?: string;
    stack: string[];
    accent: string;
    icon: string;
    award?: string;
}

export const projects: Project[] = [
    {
        title: "Zig Operating System",
        timeframe: "May 2025 - Present",
        secondaryDate: "On & Off :)",
        description:
            "Currently developing a RISC-V operating system in Zig, with a focus on simplicity and performance.",
        href: "https://github.com/dandandooo/zig-os",
        stack: ["Zig", "RISC-V", "QEMU", "ELF"],
        accent: "amber",
        icon: "catppuccin:zig",
    },
    {
        title: "Illinix 391",
        timeframe: "Mar 2025 - May 2025",
        secondaryDate: "Spring 2025",
        description:
            "Developed RISC-V operating system, with sound driver, network stack, shell, filesystem, and DOOM. Won second in " +
            "class design competition.",
        stack: ["C", "QEMU", "RISC-V", "Assembly"],
        accent: "cyan",
        icon: "catppuccin:c",
        // award: "2nd Place"
    },
    {
        title: "Minecrust",
        timeframe: "July 2026 - Present",
        secondaryDate: "Just started",
        description: "Writing a Minecraft style renderer with a focus on pure performance using WGPU in Rust.",
        // "href":
        stack: [ "Rust", "Vulkan", "Wgpu" ],
        accent: "rose",
        icon: "catppuccin:rust-alt"
    },
    {
        title: "Convolutional Neural Network",
        timeframe: "Mar 2026 - May 2026",
        secondaryDate: "Spring 2026",
        description:
            "Wrote a full inference pass for the LeNet-5 network using highly optimized and fused CUDA kernels.",
        stack: ["CUDA", "C++"],
        accent: "lime",
        icon: "catppuccin:cuda",
    },
    {
        title: "Finc",
        timeframe: "July 2026 - Present",
        secondaryDate: "Not finishing soon",
        description: "Custom low-level programming language early in development.",

        stack: ["OCaml"],
        accent: "plum",
        icon: "catppuccin:ocaml",
    },
    {
        title: "Brainrot TCG",
        timeframe: "HackIllinois 2026",
        secondaryDate: "Mar 2026",
        description:
            "A trading card game for brainrot characters, with voices and sound effects. ",
        href: "https://devpost.com/software/brainrottcg",
        stack: ["React", "Vite"],
        accent: "cyan",
        icon: "catppuccin:javascript-react",
        award: "Most Popular",
    },
    {
        title: "Planet Hopper",
        timeframe: "Sep 2025 - Dec 2025",
        secondaryDate: "Fall 2025",
        description:
            "Local-gravity based 2D platformer with a space-based narrative, with a twist, and 10 featureful levels.",
        href: "https://github.com/Dandandooo/planet-hopper",
        stack: ["Godot"],
        accent: "plum",
        icon: "catppuccin:godot",
    },
    {
        title: "Hunter LLM",
        timeframe: "AgentOps Hack-night 2025",
        secondaryDate: "Feb 2025",
        description:
            "LLM Agent for automated network reconnaissance and vulnerability scanning.",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7306775652504879105/",
        stack: ["Python", "Agents SDK"],
        accent: "rose",
        icon: "catppuccin:python",
        award: "1st Place",
    },
    {
        title: "BlackBox Studio",
        timeframe: "HackIllinois 2025",
        secondaryDate: "Mar 2025",
        description:
            "Graphical functional programming editor that lets you visualize function interaction.",
        href: "https://github.com/Dandandooo/BlackBox-Studio",
        stack: ["React", "JavaScript", "Rust"],
        accent: "plum",
        icon: "catppuccin:javascript-react",
        award: "Best Dev-tool",
    },
    {
        title: "Hello Lang",
        timeframe: "HackIllinois 2024",
        secondaryDate: "Mar 2024",
        description: "Modular tool to create hello world project in any language.",
        href: "https://github.com/dandandooo/create-project",
        stack: ["Rust"],
        accent: "amber",
        icon: "catppuccin:rust-alt",
        award: "1st Place",
    },
    {
        title: "My Dotfiles",
        timeframe: "Always",
        description:
            "My linux and terminal customizations, written as a modular Nix configuration.",
        href: "https://github.com/dandandooo/dotfiles",
        stack: ["Nix"],
        accent: "cyan",
        icon: "catppuccin:nix",
    },
    {
        title: "PPTGPT",
        timeframe: "Aug 2024 - May 2025",
        secondaryDate: "Sophomore Year",
        description:
            "LLM Framework for modifying PowerPoint presentations using human instructions and visual cues.",
        href: "https://github.com/dandandooo/PPTGPT",
        stack: ["Python", "Gemini"],
        accent: "orange",
        icon: "catppuccin:python",
    },
    {
        title: "News Comparator",
        timeframe: "HackTJ 9.0",
        secondaryDate: "Mar 2022",
        description:
            "Web tool to compare news articles using cosine similarity to highlight similarities and differences.",
        href: "https://github.com/bradley-cao/News-Comparator",
        stack: ["Python", "Flask", "JavaScript"],
        accent: "rose",
        icon: "catppuccin:python",
        award: "Washington Post Prize",
    },
    {
        title: "Energy Undead",
        timeframe: "HackTJ 10.0",
        secondaryDate: "Mar 2023",
        description:
            "An interactive collection of minigames designed to teach children to save energy at home.",
        href: "https://github.com/bradley-cao/Energy-Undead",
        stack: ["Unity", "C#"],
        accent: "lime",
        icon: "catppuccin:unity",
    },
    {
        title: "Mortgage GPT",
        timeframe: "May 2024 - Aug 2024",
        secondaryDate: "Summer 2024",
        description:
            "A chatbot designed to assist users with details from Freddy Mac's and Fannie Mae's Servicer & Seller guides.",
        stack: ["Python", "React", "TypeScript", "OpenAI"],
        accent: "cyan",
        icon: "catppuccin:javascript-react",
    },
    {
        title: "This Website",
        timeframe: "Feb 2026",
        description: "This website you're looking at!",
        href: "https://github.com/Dandandooo/portfolio",
        stack: ["Astro", "TypeScript"],
        accent: "plum",
        icon: "catppuccin:astro",
    },
];
