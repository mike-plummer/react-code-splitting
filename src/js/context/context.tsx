import * as React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import UninterestedComponent from './uninterested.component';

interface LanguageState {
  language: string;
  children: React.ReactNode;
}

export const LanguageContext = React.createContext('en');

class LanguageProvider extends React.Component<{}, LanguageState> {
  readonly state: LanguageState = {
    language: 'en',
    children: this.props.children
  };

  private setToEnglish = (): void => this.setState({ language: 'en' });
  private setToSpanish = (): void => this.setState({ language: 'es' });
  private increment = (): void => this.setState({ children: React.cloneElement(this.state.children as any) });

  render(): React.ReactNode {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <Segment>
          <Button onClick={this.setToEnglish}>English</Button>
          <Button onClick={this.setToSpanish}>Spanish</Button>
          <Button onClick={this.increment}>Refresh</Button>

          {this.state.children}
        </Segment>
      </LanguageContext.Provider>
    );
  }
}

const Context: React.SFC<{}> = () => (
  <>
    <p>
      React v16.3 added a new Context capability that supports a Redux-ish ability to pass data down to children without
      actually flowing props through manually. This allows for looser coupling of components while also reducing
      unnecessary re-renders of intermediary components.
    </p>

    <LanguageProvider>
      <UninterestedComponent/>
    </LanguageProvider>

    <p>
      Before Context we would have to pass a prop down through uninterested components or use something like Redux
      to manage data outside our component tree
    </p>
  </>
);

export default Context;