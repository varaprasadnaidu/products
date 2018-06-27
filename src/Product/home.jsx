import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Phone', render: () => <Tab.Pane>Phone Content</Tab.Pane> },
  { menuItem: 'BradBand', render: () => <Tab.Pane>Bradband Content</Tab.Pane> },
  { menuItem: 'Digital Tv', render: () => <Tab.Pane>Digital TV Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic