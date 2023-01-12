import React from "react";
import "./cardlist.css";
import {Card} from '../card/card.component';

export const CardList = props => (

        <div className="cardlist">

            {
            props.monsters.map( monster =>   (                 
              <Card key={monster.id} monster={monster} />
              ))
               }             
        </div>
    )
