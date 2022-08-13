import React, { useState } from 'react'
import { Card } from '../components/Card';
import { faker } from '@faker-js/faker';

export const Speakers = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current)
  };

  return (
    <div className="speakers">
      <div className="tle">SPEAKERS</div>
      <div className="hd">MEET THE SPEAKERS</div>
      <div className="wp">
        <Card className="itm" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

        <Card className="itm" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

        <Card className="itm" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>
      
        {isShown && (
          <>
          <Card className="itm" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

          <Card className="itm" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

          <Card className="itm" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>
          </>
        )}
      </div>
      <button class="bn" onClick={handleClick}>{isShown ? 'Hide' : 'View All Speakers'}</button>
    </div>
  )
}
 