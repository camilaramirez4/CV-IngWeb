import { Project } from "./Project";
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from './Button';
import { ProyectDialog } from './Dialogs/ProyectDialog';

const Portfolio = () => {

    return (
        <div className="flex flex-col mb-8 items-center w-full overflow-hidden">
            <span className="text-3xl font-bold">Portfolio</span>
            <p className="text-center m-6 w-2/5 text-secondary-text">
            Some of the projects that I have had the opportunity to carry out throughout 
            my university career with the knowledge I have acquired.
            </p>
            <div className="flex clex-col gap-16 overflow-x-scroll w-full">
                <Project 
                    imagePath="/images/Femakeup.jpg" 
                    title="Femakeup Webpage" 
                    description="A website designed for the sale of makeup and skincare products by a small business."
                    dialogDescription="This website was created using a Bootstrap template, in JavaScript with HTML and CSS."
                    dialogLink="https://github.com/camilaramirez4/femakeupwebpage"
                />
                <Project 
                    imagePath="/images/Amarte.jpg" 
                    title="Amarte Webpage" 
                    description="This website was designed for Amarte, which is a business in which products made with epoxy resin are sold."
                    dialogDescription="This website was created using a Bootstrap template, using JavaScript, HTML, and CSS. Additionally, 
                    it features functionalities such as a shopping cart and a login system, and is connected to a database where the necessary 
                    information is stored."
                    dialogLink="https://github.com/camilaramirez4/amartewebpage" 
                />
                <Project 
                    imagePath="/images/Udea.jpg" 
                    title="Game for institutional accreditation" 
                    description="Video game made by some students whose objective is to facilitate this process for teachers and students."
                    dialogDescription="This video game was developed using Unity, Blender, and C#. It features 3D graphics and a database that
                     stores the necessary information for its proper functioning."
                    dialogLink="https://github.com/Sofito-code/Proyecto-integrador-1"
                />
                <Project 
                    imagePath="/images/CV.png" 
                    title="CV" 
                    description="This CV was developed for academic purposes, putting front-end development skills into practice."
                    dialogDescription="Resume developed in TypeScript language, using frameworks such as React and Tailwind CSS."
                    dialogLink="https://github.com/camilaramirez4/CV-IngWeb"
                />
            </div>
        </div>
    );
};

export { Portfolio };