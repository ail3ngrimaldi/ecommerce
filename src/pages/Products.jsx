import React from 'react';
import './Products.scss';
import ProductCard from './../components/Product';
import { data } from '../assets/data';

console.log(typeof(data))

function Products() {
    return (
        <div id='projects' className='container__projects' >
            <section id='centered'>
              <h1>Catálogo</h1>
            </section>
            <div className='cards__container'>
                <ProductCard 
                             title={data.productOne.title}
                             img={data.productOne.image}
                />
                <ProductCard 
                             title={data.productTwo.title}
                             img={data.productTwo.image}
                />
                <ProductCard 
                             title={data.productThree.title}
                             img={data.productThree.image}
                />
                <ProductCard 
                             title={data.productFour.title}
                             img={data.productFour.image}
                />
                <ProductCard 
                             title={data.productFive.title}
                             img={data.productFive.image}
                />
            </div>
        </div>
    );
  }
  
  export default Products;