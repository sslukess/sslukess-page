type skill = string;

type category = 'language' | 'frameworks' | 'platforms';


export type Skill = { 
    skill: skill;
    category: category;
}

function mapSkill(skillToMap: skill, category: category): Skill {

    const newSkill: Skill = {
        skill: skillToMap,
        category: category
    }

    return newSkill;
};

// raw data
const langs = ["TypeScript", "JavaScript", "React", "C#", "GraphQL", "CSS", "HTML", "Docker"]
const frameworks = ["NextJS", "Gatsby", "Node", ".NET", "Styled Components", "Storybook", "Vite", "Jest", "Testing Library", "Redux", "Webpack"];
const platforms = ["Netlify", "Github", "Github Actions", "Contentful"];


// map the above raw skills to Skill types
export const mappedLangs: Skill[] = langs.map((skill) => mapSkill(skill, 'language')); 
export const mappedFrameworks: Skill[] = frameworks.map((skill) => mapSkill(skill, 'frameworks'));
export const mappedPlatforms: Skill[] = platforms.map((skill) => mapSkill(skill, 'platforms'));