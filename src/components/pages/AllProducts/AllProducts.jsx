import React from 'react';
import HeaderBanner from '../../HeaderBanner/Banner';
import Navigation from '../../Navigation/Navigation';
import Categories from '../../Categories/Categories';
import DiscountCard from '../../DiscountCard/Discount';
import Sale from '../../Sale/Sale';
import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';

const AllProducts = () => (
  <div className="pageBody">
    <Navigation />
    <HeaderBanner />
    {/* <Categories /> {/* вместо категорий поставить AllProducts */}
    <Sale />
    {/* <Contact />
    <Map /> */}
  </div>
);

export default AllProducts;