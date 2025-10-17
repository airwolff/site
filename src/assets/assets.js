import automation_icon from './automation_icon.png'
import campaign_icon from './campaign_icon.png'
import personalization_icon from './personalization_icon.png'
import testing_icon from './testing_icon.png'
import user_image from './me.jpg';
import education_icon from './education_icon.png';
import languages_icon from './languages_icon.png';
import new_projects_icon from './new_projects_icon.png';
import new_tools_icon from './new_tools_icon.png'
import code_icon from './code-icon-light.svg';
import code_icon_dark from './code-icon-dark.svg';
import projects_icon from './projects-icon-light.svg';
import projects_icon_dark from './projects-icon-light.svg';
import edu_icon from './edu-icon-light.svg';
import edu_icon_dark from './edu-icon-dark.svg';
import tools_icon from './tools-icon-light.svg';
import tools_icon_dark from './tools-icon-light.svg';
import vscode from './vscode.png';
import git from './git.svg';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import service_mgmt from './ service-management.svg';
import bitbucket from './bitbucket.svg';
import jira from './jira.svg';
import litmus from './litmus.svg';
import email_on_acid from './email-on-acid.svg';
import chrome_devtools from './chrome-devtools.svg';
import confluence from './confluence.svg';
import docker from './docker.svg';
import figma from './figma.svg';
import firebase from './firebase.svg';
import github from './GitHub_Logo.png';
import sfmc from './sfmc.svg';

export const assets = {
    automation_icon,
    campaign_icon,
    personalization_icon,
    testing_icon,
    user_image,
    education_icon,
    new_projects_icon,
    new_tools_icon,
    languages_icon,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    projects_icon,
    projects_icon_dark,
    tools_icon,
    tools_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    download_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    service_mgmt,
    bitbucket,
    jira,
    litmus,
    email_on_acid,
    chrome_devtools,
    confluence,
    docker,
    github,
    sfmc,
    jira,
    sfmc
};

export const workData = [
    {
        id: 1,
        title: 'ACME Corporation Newsletter',
        description: 'Single-column responsive newsletter template with modular content sections. Professional corporate communications design.',
        client: 'Template Design',
        bgImage: '/acme_desktop.png',
        mobileImage: '/acme_mobile.png',
        technologies: ['HTML Email', 'Inline CSS', 'Responsive Tables', 'Outlook Compatibility'],
        codeRepo: 'https://github.com/airwolff/email_projects',
    },
    {
        id: 2,
        title: 'Logoipsum Fireworks Event Promotion',
        description: 'Multi-section promotional email with hero imagery and event details. High-impact visual storytelling for entertainment marketing.',
        client: 'Template Design',
        bgImage: '/fireworks_desktop.png',
        mobileImage: '/fireworks_mobile.png',
        technologies: ['HTML Email', 'Dark Theme Design', 'Image Optimization', 'CTA Placement'],
        codeRepo: 'https://github.com/airwolff/email_projects',
    },
    {
        id: 3,
        title: 'Villain Supply Co. Product Catalog',
        description: 'Three-column responsive grid layout for e-commerce product showcases. Mobile-optimized single-column stacking.',
        client: 'Template Design',
        bgImage: '/villains_desktop.png',
        mobileImage: '/villains_mobile.png',
        technologies: ['HTML Email', 'Multi-Column Grid', 'Responsive Design', 'E-commerce Layout'],
        codeRepo: 'https://github.com/airwolff/email_projects',
    },
];

export const infoList = [
    { 
        icon: assets.languages_icon, title: 'Languages & Technologies', description: 'Front-End: HTML, CSS, JavaScript, ReactJs, NextJs, TypeScript, Responsive Design. CMS: WordPress, Webflow, Squarespace. Email: Salesforce Marketing Cloud, Litmus.' },
    { 
        icon: assets.new_tools_icon, title: 'Development Tools', 
        description: 'VSCode, Firebase, Figma, Git, Jira, Jira Service Management, Salesforce Marketing Cloud, Litmus, Email on Acid, Chrome DevTools, Google Lighthouse, CI/CD Pipelines, GitHub Actions, Docker, Trello, AMPscript, SQL' },
    { 
        icon: assets.education_icon, title: 'Education', 
        description: 'PRIME DIGITAL ACADEMY | Full-Stack Software Engineer Certification, 2017' },
];

export const serviceData = [
    { 
        icon: assets.campaign_icon,
        title: 'Email Campaign Development', 
        description: 'Responsive HTML emails optimized for 90+ email clients',
        link: ''
    },
    { 
        icon: assets.automation_icon,
        title: 'Marketing Automation',
        description: 'Journey Builder workflows and triggered campaigns in SFMC', 
        link: '' 
    },
    {   
        icon: assets.personalization_icon,
        title: 'AMPscript & Personalization',
        description: 'Dynamic content and data-driven personalization',
        link: '' 
    },
    { 
        icon: assets.testing_icon, 
        title: 'Email Testing & Optimization',
        description: 'Cross-client testing, A/B testing, and performance analysis',
        link: ''
    }
]