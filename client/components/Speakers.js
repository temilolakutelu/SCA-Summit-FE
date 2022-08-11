import React, { useState } from 'react'
import { Card } from './Card';
import { faker } from '@faker-js/faker';

export const Speakers = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current)
  };

  return (
    <div className="speakers">
      <div className="title">SPEAKERS</div>
      <div className="header">MEET THE SPEAKERS</div>
      <div className="wrapper">
        <Card className="item" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

        <Card className="item" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

        <Card className="item" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>
      
        {isShown && (
          <>
          <Card className="item" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

          <Card className="item" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>

          <Card className="item" name={`${faker.name.firstName()} ${faker.name.lastName()}`} title={faker.name.jobTitle()} pic={faker.image.avatar()}/>
          </>
        )}
      </div>
      <button onClick={handleClick}>{isShown ? 'Hide' : 'View All Speakers'}</button>
    </div>
  )
}
 