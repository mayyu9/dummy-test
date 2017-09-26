import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import ClinicalItemView from 'terra-clinical-item-view';
import Header from 'terra-clinical-header';
import ErrorView from 'terra-clinical-error-view';
import NoDataView from 'terra-clinical-no-data-view';
import { injectIntl } from 'react-intl';
import Table from 'terra-table';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'terra-modal';
import Grid from 'terra-grid';
import Button from 'terra-button';

const propTypes = {
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
  intl: PropTypes.object.isRequired,
};

const DummpTestAppView = (props) => {
  const { isLoading, isFailed, text, intl } = props;
  let content;

  if (isLoading) {
    content = null;
  } else if (isFailed) {
    content = <ErrorView description={intl.formatMessage({ id: 'dummt-test-engine.dummp-test-app-failed-to-load' })} isGlyphHidden />;
  } else if (text && text.length > 0) {
    content = <DummyTest />;
  } else {
    content = <NoDataView heading={intl.formatMessage({ id: 'dummt-test-engine.no-dummp-test-app' })} isGlyphHidden />;
  }

  return (
    <ContentContainer header={<Header title={intl.formatMessage({ id: 'dummt-test-engine.dummp-test-app' })} />}>
      {content}
    </ContentContainer>
  );
};

//terra-clinical-header
/*class DummyTest extends React.Component{

render(){
return(
<Table isStriped={false}>
  <Table.Header>
    <Table.HeaderCell content={'Column Heading 1'} key={'COLUMN_0'} minWidth={'small'} />
    <Table.HeaderCell content={'Column Heading 2'} key={'COLUMN_1'} minWidth={'medium'} />
    <Table.HeaderCell content={'Column Heading 3'} key={'COLUMN_2'} minWidth={'large'} />
  </Table.Header>
  <Table.Rows>
    <Table.Row key={'ROW_0'}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
    <Table.Row key={1}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
    <Table.Row key={2}>
      <Table.Cell content={'Table Data'} key={'COLUMN_0'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_1'} />
      <Table.Cell content={'Table Data'} key={'COLUMN_2'} />
    </Table.Row>
  </Table.Rows>
</Table>
)
}
}*/


//tabview code:
/*const Tabs = React.createClass({
  displayName: 'Tabs',
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index}>
          <a href="#"
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  },
  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
});

const Pane = React.createClass({
  displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});


class DummyTest extends React.Component{
  render() {
    return (
      <div>
        <Tabs selected={0}>
          <Pane label="Tab 1">
            <div>This is my tab 1 contents!</div>
          </Pane>
          <Pane label="Tab 2">
            <div>This is my tab 2 contents!</div>
          </Pane>
          <Pane label="Tab 3">
            <div>This is my tab 3 contents!</div>
          </Pane>
        </Tabs>
      </div>
    );
  }
};*/

class DummyTest extends React.Component{
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0, isOpen: true };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          ariaLabel="My Modal"
          isOpen={this.state.isOpen}
          isFullscreen ={true}
          onRequestClose={this.handleCloseModal} >
          <div>
            <h1>My Modal</h1>
            <p>Additional content goes here</p>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
              <TabList>
                <Tab>Saved Notes</Tab>
                <Tab>Notes to Review</Tab>
                <Tab>Signed Notes </Tab>
              </TabList>
              <TabPanel>Saved Notes panne</TabPanel>
              <TabPanel>Submitted Notes pane</TabPanel>
              <TabPanel>Signed Notes pane</TabPanel>
            </Tabs>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
        <hr/>

        <div>
        <Grid>
          <Grid.Row>
            <Button text="AddNote" />
          </Grid.Row>
        </Grid>
        <hr />
        <Grid>
          <Grid.Row>
            <Grid.Column  col={3}>
              <p> SavedNotes </p>
            </Grid.Column>
            <Grid.Column col={3}>
              <p> NotestoReview </p>
            </Grid.Column>
            <Grid.Column col={3}>
              <p> SignedNotes </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </div>

    );
  }
}

/*class DummyTest extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <Grid>
        <Grid.Row>
          <Grid.Column large={3}>
            <p> First Column content </p>
          </Grid.Column>
          <Grid.Column col={3}>
            <p> Second Column content </p>
          </Grid.Column>
          <Grid.Column col={3}>
            <p> Third Column content </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
}

}*/

DummpTestAppView.propTypes = propTypes;

export default injectIntl(DummpTestAppView);

//content = <ClinicalItemView displays={[<ClinicalItemView.Display text={text} />]} />;
