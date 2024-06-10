"use client"
import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function MyProjects() {

  interface BuiltWith {
    id: string;
    name: string;
    icon: JSX.Element;
  }

  interface Card {
    id: string;
    title: string;
    description: string;
    builtWith: BuiltWith[];
    image: string;
    githubLink: string;
    previewLink: string;
  }

  const cards: Card[] = [
    {
      id: "1",
      title: "Holidaze",
      description: "A Booking website where user can book and manage venues",
      builtWith: [
        {
          id: "1",
          name: "Next Js",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/></svg>
          ),
        },
        {
          id: "2",
          name: "Tailwind Css",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"/>
            </svg>
          ),
        },
        {
          id: "3",
          name: "JavaScript",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
              <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
            </svg>
          ),
        },
      ],
      image: "https://i.imgur.com/2hpCDyd.png",
      githubLink: "https://github.com/KrystianGH2/holidaze-project",
      previewLink: "https://holidaze-project-six.vercel.app/"
    }, 
    {
      id: "2",
      title: "ECOM.CO",
      description: "A Frontend Ecommerce Semester Project",
      builtWith: [
        {
          id: "1",
          name: "Next Js",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/></svg>
          ),
        },
        {
          id: "2",
          name: "Tailwind Css",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"/>
            </svg>
          ),
        },
        {
          id: "3",
          name: "JavaScript",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
              <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
            </svg>
          ),
        },
      ],
      image: "https://i.imgur.com/BQeg6zt.png",
      githubLink: "https://github.com/KrystianGH2/JS-Frameworks-CA",
      previewLink: "https://js-frameworks-ca-sigma.vercel.app/"
    },
    {
      id: "3",
      title: "BlockGuardian",
      description: "A web application to report safety concerns, incidents, or suspicious activities within their neighborhood.",
      builtWith: [
        {
          id: "1",
          name: "Next Js",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/></svg>
          ),
        },
        {
          id: "2",
          name: "Tailwind Css",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"/>
            </svg>
          ),
        },
        {
          id: "3",
          name: "JavaScript",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
              <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
            </svg>
          ),
        },
      ],
      image: "https://i.imgur.com/xhfgKOU.png",
      githubLink: "https://github.com/KrystianGH2/Industry-Knowledge",
      previewLink: "https://blockguardian.netlify.app/"
    },
   
    {
      id: "4",
      title: "BidBuddies",
      description: "An Auction website where users can list their items for an auction",
      builtWith: [
        {
          id: "1",
          name: "Vite",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px" baseProfile="basic"><path fill="#9575cd" d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"/><path fill="#fbc02d" d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"/></svg>
          ),
        },
        {
          id: "2",
          name: "Tailwind Css",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"/>
            </svg>
          ),
        },
        {
          id: "3",
          name: "JavaScript",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
              <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
            </svg>
          ),
        },
      ],
      image: "https://i.imgur.com/Thqt0l7.png",
      githubLink: "https://github.com/KrystianGH2/semester-project-2Y",
      previewLink: "https://bidbuddies.netlify.app/home"
    },
    {
      id: "5",
      title: "Community Science Museum",
      description: "A virtual community science museum that showcases interactive exhibits and educational resources.",
      builtWith: [
        {
          id: "1",
          name: "HTML",
          icon: (
           <svg xmlns="http://www.w3.org/2000/svg"  
           viewBox="0 0 48 48" width="24px" height="24px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>
          ),
        },
        {
          id: "2",
          name: " Css",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>
          ),
        },
        {
          id: "3",
          name: "JavaScript",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
              <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
            </svg>
          ),
        },
      ],
      image: "https://i.imgur.com/TijkydJ.png",
      githubLink: "https://github.com/KrystianGH2/Community-Science-Museum",
      previewLink: "https://communitysciencemuseum-kgc.netlify.app/"
    },
    {
      id: "6",
      title: "Game Hub",
      description: "A Game store website you can view and purchase games. This is my first front-end project.",
      builtWith: [
        {
          id: "1",
          name: "Next Js",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  
           viewBox="0 0 48 48" width="24px" height="24px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>
          ),
        },
        {
          id: "2",
          name: "Tailwind Css",
          icon: (
             <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>
          ),
        },
        {
          id: "3",
          name: "JavaScript",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
              <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
            </svg>
          ),
        },
      ],
      image: "https://i.imgur.com/LVq6A3r.png",
      githubLink: "https://github.com/KrystianGH2/Game-Hub-CA",
      previewLink: "https://gamehubcakgc.netlify.app/"
    },
  ];



  return (
    <>
      <main
        id="projects"
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex justify-center items-center flex-col align-middle text-center gap-2 py-20">
          <h1 className="text-3xl font-bold text-center text-white">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Below you`ll find my projects, while some of my other projects may
            have inactive APIs. Feel free to explore them on my GitHub. Enjoy!
          </p>
        </div>
        <section className="flex w-full flex-wrap justify-center items-stretch max-w-7xl gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-zinc-900 text-white p-4 rounded-lg w-full md:max-w-[380px] md:mx-auto mx-8 flex flex-col"
            >
              <div className="bg-zinc-300 h-60 rounded-lg mb-4 relative group ">
                <div className="aspect-w-4 aspect-h-3 ">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg "
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-8 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    onClick={() => window.open(card.previewLink, "_blank")}
                    className="text-white flex flex-row justify-center items-center gap-2 p-2 border rounded-md mr-2 text-xl hover:text-gray-300 transition-all cursor-pointer"
                  >
                    Preview{" "}
                    <span className="block w-3 h-3 rounded-full bg-green-400"></span>
                  </span>
                  <button
                    onClick={() => window.open(card.githubLink, "_blank")}
                    className="bg-white text-black text-xl transition-all p-2 rounded-xl hover:bg-gray-300"
                  >
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full h-full max-h-48">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-zinc-400 mb-4 align-top">
                  {card.description}
                </p>
                <div className="flex flex-row w-full justify-between items-center">
                  <p className="text-zinc-400 mb-2">Built With</p>
                  <div className="flex space-x-2">
                    {card.builtWith.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-full bg-zinc-700 p-2"
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
