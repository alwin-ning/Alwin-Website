import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Alwin",
    lastName: "Ning",
    initials: "AN", 
    position: "student at the University of Waterloo",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 

        {
            emoji: '🌎',
            text: 'from Ottawa, Canada'
        },
        {
            emoji: "💼",
            text: "Mathematics Student at Waterloo"
        },
        {
            emoji: "📧",
            text: "ajning@uwaterloo.ca"
        }
    ],
    socials: [

        {
            link: "https://www.instagram.com/ningalwin/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/alwin-ning",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ningalwin/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Hello! I'm Alwin Ning. I'm a first-year mathematics student at the University of Waterloo.",
    skills:
        {
            proficientWith: ['C', 'Java', 'Python',  'Excel'],
            exposedTo: ['Javascript', 'Github', 'R', 'React', 'Html', 'Adobe Photoshop']
        }
    ,
    hobbies: [
        {
            label: 'Working out',
            emoji: '🏋️'
        },
        {
            label: 'Chess',
            emoji: '♘'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        }
    ],
    portfolio: [ 
        {
            title: "Website",
            live: "https://alwin-website.vercel.app/", 
            source: "https://github.com/alwin-ning", 
            image: mock1
        },
        
    ]
}
