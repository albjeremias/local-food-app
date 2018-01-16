import React from 'react';
import { StackNavigator } from 'react-navigation';

import Map from 'app/screens/Map';
import Node from 'app/screens/Node';
import Product from 'app/screens/Product';

import DateFilter from 'app/screens/Node/containers/DateFilter';

const routeConfig = {
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      title: 'Map',
    })
  },
  Node: {
    screen: Node,
    navigationOptions: ({ navigation }) => {
      const node = navigation.state.params;

      return {
        title: node.name,
        headerRight: <DateFilter nodeId={node.id} />,
      };
    }
  },
  Product: {
    screen: Product,
    navigationOptions: ({ navigation }) => {
      const product = navigation.state.params;

      return {
        title: product.name,
      };
    }
  },
};

const navigatorConfig = {};

const UserNavigation = StackNavigator(routeConfig, navigatorConfig);

export default UserNavigation;