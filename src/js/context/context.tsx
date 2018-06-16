import * as React from 'react';
import { Button, Segment } from 'semantic-ui-react';

interface ContentProps {
  language: string;
}

interface LanguageState {
  language: string;
}

const LanguageContext = React.createContext('en');

class LanguageProvider extends React.Component<{}, LanguageState> {
  readonly state: LanguageState = { language: 'en' };

  private setToEnglish = (): void => this.setState({ language: 'en' });
  private setToSpanish = (): void => this.setState({ language: 'es' });

  render(): React.ReactNode {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <Segment>
          <Button onClick={this.setToEnglish}>English</Button>
          <Button onClick={this.setToSpanish}>Spanish</Button>

          <p>No props are passed down to the children of this component</p>

          {this.props.children}
        </Segment>
      </LanguageContext.Provider>
    );
  }
}

const UninterestedComponent = () => {
  console.log('Rendering a component that doesn\'t care about Context');
  return (
    <>
      <Segment>This content doesn't care about Context, so it won't re-render on a Context change even though it's a child</Segment>
      <I10NContent/>
    </>
  );
};

class I10NContent extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <>
        <LanguageContext.Consumer>
          {language => (
            <Segment>
              <p>Everything in here magically has access to anything defined on the context and will re-render on Context changes</p>
              <InterestedComponent language={language}/>
            </Segment>
          )}
        </LanguageContext.Consumer>
      </>
    );
  }
}

class InterestedComponent extends React.Component<ContentProps> {
  render(): React.ReactNode {
    const { language } = this.props;

    console.log('Rendering a component that does care about Context');

    return (
      <Segment>
        {language === 'en' && (
          <p>Content in English</p>
        )}
        {language === 'es' && (
          <p>Contenido en Español</p>
        )}
      </Segment>
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
  </>
);

export default Context;