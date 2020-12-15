import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'pink'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'green'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'green'}}>
          <Tab tabStyle={{backgroundColor:'pink'}} activeTabStyle={{backgroundColor:'pink'}} textStyle={{color:'white'}} activeTextStyle={{color:'green'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'pink'}} activeTabStyle={{backgroundColor:'pink'}} textStyle={{color:'white'}} activeTextStyle={{color:'green'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'pink'}} activeTabStyle={{backgroundColor:'pink'}} textStyle={{color:'white'}} activeTextStyle={{color:'green'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}