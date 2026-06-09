import { instagram, shieldTick, support, truckFast } from "../assets/icons";
import { profileImage, customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#sobre", label: "Sobre Mim" },
    { href: "#formacao", label: "Formação" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#redes", label: "Redes Sociais" },
    { href: "#contato", label: "Contato" },
];

export const shoes = [
    {
        thumbnail: customer2,
        bigShoe: profileImage,
    },
    {
        thumbnail: customer2,
        bigShoe: profileImage,
    },
    {
        thumbnail: customer2,
        bigShoe: profileImage,
    },
];
export const heroHighlights = [
    { value: 'IBMEC', label: 'Faculdade' },
    { value: 'Ciências Econômicas', label: 'Curso' },
    { value: 'Empreendedor', label: 'Foco' },
    { value: 'Brasília - DF', label: 'Localização' },
];

export const profileStatistics = [
    { value: '19 anos', label: 'Idade' },
    { value: '1.779', label: 'Seguidores' },
    { value: '1.668', label: 'Seguindo' },
    { value: 'Brasília - DF', label: 'Localização' },
];

export const services = [
    {
        imgURL: shieldTick,
        label: "Economia",
        subtext: "Base sólida em teoria econômica, análise de mercado e modelagem financeira."
    },
    {
        imgURL: truckFast,
        label: "Empreendedorismo",
        subtext: "Paixão por lançar ideias e construir projetos com impacto e escalabilidade."
    },
    {
        imgURL: support,
        label: "Estratégia de Negócios",
        subtext: "Experiência em desenvolvimento de estratégias e criação de valor."
    },
    {
        imgURL: shieldTick,
        label: "Comunicação",
        subtext: "Habilidade em comunicação clara para apresentações, equipes e networking."
    },
    {
        imgURL: truckFast,
        label: "Análise Financeira",
        subtext: "Capacidade de interpretar dados financeiros e apoiar decisões com base em números."
    },
    {
        imgURL: support,
        label: "Liderança",
        subtext: "Foco em desenvolvimento de liderança e colaboração em projetos acadêmicos e empreendedores."
    },
];

export const footerLinks = [
    {
        title: "Seções",
        links: [
            { name: "Sobre Mim", link: "#sobre" },
            { name: "Formação", link: "#formacao" },
            { name: "Habilidades", link: "#habilidades" },
            { name: "Redes Sociais", link: "#redes" },
            { name: "Contato", link: "#contato" },
        ],
    },
    {
        title: "Conectar",
        links: [
            { name: "Instagram", link: "https://instagram.com/_matheusrsantana" },
            { name: "E-mail", link: "mailto:matheus@example.com" },
        ],
    },
    {
        title: "Contato",
        links: [
            { name: "matheus@example.com", link: "mailto:matheus@example.com" },
            { name: "Instagram: @_matheusrsantana", link: "https://instagram.com/_matheusrsantana" },
        ],
    },
];

export const socialMedia = [
    { src: instagram, alt: "instagram logo" },
];