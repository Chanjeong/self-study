import React, { useEffect, useState } from 'react';
import datas from './cards.js';
import BusinessCard from './BusinessCard';

//추첨하기 버튼과 명함 컴포넌트를 분리
export default function Card() {
    const [cards, setCards] = useState([]);
    const [pickedCards, setPickedCards] = useState([]);

    function draw() {
        //조건추가
        if (pickedCards.length > 2) {
            const names = pickedCards.reduce((acc, cur) => {
                return (acc = acc.concat(`${cur.name}, `));
            }, '');
            return alert(`당첨자는 ${names} 입니다`);
            //alert
        }

        const randomIdx = Math.floor(Math.random() * cards.length);
        const randomItem = cards[randomIdx];

        //중복제거
        setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));
        //당첨자관리
        setPickedCards([...pickedCards, randomItem]);
    }
    useEffect(() => {
        setCards(datas);
    }, []);
    return (
        <div>
            {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
            {pickedCards.length > 0 && <BusinessCard info={pickedCards[pickedCards.length - 1]} />}
        </div>
    );
}
