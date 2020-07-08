import React from 'react';
import './App.css';
import Tile from './components/Tile';
import Card from './components/Card';
import Item from './components/Item';
import Counter from './components/Counter';
import { isNull } from 'util';

//TODO: Remember to import components you use

function App(props: any) {
  return ( //TODO:  Add multiple Card components inside the <Tile> 
    //       Add several Item components to each <Card>
    //       (see the screenshot for the completed My TNT Exercise)
    <div>
      <h1 className="App-header">My TNT</h1>
      <Tile >
        <Card title="New Technologist" description="Friends from the TNT program" website="https://newtechnologists.com/">
          <Item name="Zara Thomas" email="zthomas@home.com" team={16}/>
          <Item name="Mica Lujan" email="mica.103@song.com" team={29}/>
          </Card>
        <Card title="Instructor" description="Connect on LinkedIn to keep touch" website="https://linkedin.com/"> 
        <Item name="Sylvan Frone" email="sylvan@forest.com" team={undefined}/>
        </Card>
       
        <Card title="Coach" description="Incredible Support"> 
        <Item name="Nadie Hu" team={16} email="nadia.hu@microsoft.com" />
        <Item name="Sam Stiles" team={16} email="sam.stiles@microsoft.com" /> 
        </Card>
          
      </Tile>
    </div>
  )
}

export default App;
