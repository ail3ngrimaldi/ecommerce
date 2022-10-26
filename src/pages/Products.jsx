import React from 'react';
import './Products.scss';
import ProductCard from './../components/Product';
// import { images } from './Images';

function Products() {
    return (
        <div id='projects' className='container__projects' >
            <section id='centered'>
              <h1>Catálogo</h1>
            </section>
            <div className='cards__container'>
                <ProductCard 
                             title="Remera básica"
                             description="Project with the aim of generating a positive impact on the environment, developed with React Native."
                             link="https://www.instagram.com/tachito.compost/"
                />
                <ProductCard 
                             title="Pomodoro timer"
                             description="Design created with Figma."
                             link="https://www.figma.com/file/UEWtzV3DeffnyvNmYFVFav?node-id=2%3A4"
                />
                <ProductCard 
                             title="Kindergarten"
                             description="Landing page for a kindergarten, freelance project."
                />
                <ProductCard 
                             title="Sarmiento Shelter"
                             description="Web app for an animal shelter, final project for the bootcamp 'Soy Henry'."
                             link="https://github.com/ail3ngrimaldi/protectora-animales"
                />
                <ProductCard 
                             title="My first portfolio"
                             description="My first portfolio."
                             link="https://oldportfolio-silk.vercel.app/"
                />
            </div>
        </div>
    );
  }
  
  export default Products;