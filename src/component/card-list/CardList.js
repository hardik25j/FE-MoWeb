import React, { useState } from 'react';
import Card from '../../common_component/Card';
import PopModal from '../modal/PopModal';
import { cardList } from './static';

const CardList = () => {
  const [isOpen, setIsOpen] = useState('');
  const handleToggle = (name) => setIsOpen(name)

  return (
    <React.Fragment>
      {cardList.map((card, index) => <Card  //Iterating cardList and passed the title, style into Card Comp. 
        card={card}
        key={index}
        handleToggle={handleToggle}
      />
      )}
      {isOpen ? <PopModal toggle={handleToggle} title={isOpen} /> : null}
    </React.Fragment>
  );
}


export default React.memo(CardList, function (prevprops, nextprops) {
  return prevprops === nextprops;
});

