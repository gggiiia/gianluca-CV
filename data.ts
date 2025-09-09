import {Profile, Experience, Skill} from './types';

export const skills: Skill[] = [
    {name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'},
    {name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'},
    {name: 'Typescript', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'},
    {name: 'Angular', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'},
    {name: 'Svelte', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'},
    {name: 'WordPress', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png'},
];

const [figma, react, typescript, angular, svelte,wordpress] = skills;

export const profileData: Profile = {
    name: 'Gianluca Pietrobon',
    title: 'Web developer',
    avatarUrl: 'https://drive.google.com/thumbnail?id=1316wnwnW4FZ_wvtQHSdRKMVbbM7D0enl',
    status: 'Available to work',
    email: 'gian9889@gmail.com',
    phone: '+52 9993876581',
    location: 'Merida, Yucatan, Mexico',
    jobPref: 'Open to freelance and full-time roles',
};

export const experiences: Experience[] = [
    {
        company: 'Climbo',
        description: 'Italian startup focused on online reputation, i was lead front-end developer from 2021 until 2025',
        logoUrl: 'https://images.clickfunnels.com/cdn-cgi/image/width=1000,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/erPzKR/image/7730138/file/2d847ce0be1867260ff4d3318ef5b041.png',
        logoBgColor: '#000000',
        technologies: [react, typescript, figma],
        seeMoreUrl: "https://www.climbo.com/"
    },
    {
        company: 'Lobesoft',
        description: 'tech company of witch im cofounder, we made different projects spanning different industries',
        logoUrl: 'https://storage.googleapis.com/cms.lobesoft.com/2019/12/cf376c64-logotipo.png',
        logoBgColor: '#ffffff',
        technologies: [react, angular, svelte, typescript,],
        seeMoreUrl: "https://lobesoft.com/en"
    },
    {
        company: 'Emotiva',
        description: 'Worked on an Italian AI startup project integrating facial analysis into online surveys.',
        logoUrl: 'https://emotiva.it/wp-content/uploads/2021/11/Emotiva-logo-round-1.jpg',
        logoBgColor: '#ff2b09',
        technologies: [react, typescript],
        seeMoreUrl: "https://emotiva.it/en/the-leading-ai-platforms-for-creative-effectiveness-at-scale/"
    },
    {
        company: 'BeFirst Social',
        description: 'Social growth platform, worked on the front-end as a stand alone project.',
        logoUrl: 'https://app.befirstsocial.com/img/logo-full.fc5b7c0b.png',
        logoBgColor: '#00a6ff',
        technologies: [angular, typescript],
        seeMoreUrl: "https://app.befirstsocial.com/sign-in"
    },
    {
        company: 'Macrigi',
        description: 'Italian excellence e-commence, i worked on the first version of the website in wordpress',
        logoUrl: 'https://www.macrigi.com/wp-content/uploads/2025/06/c65df3cd-2021-a-logo-per-macrigi.co_.uk_-300x75.png',
        logoBgColor: '#ffffff',
        technologies: [wordpress],
        seeMoreUrl: "https://www.macrigi.com/"
    },
];