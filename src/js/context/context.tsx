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
        <Button onClick={this.setToSpanish}>English</Button>
        </Segment>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

class I10NContent extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <LanguageContext.Consumer>
        {language => <Content language={language}/>}
      </LanguageContext.Consumer>
    );
  }
}

class Content extends React.Component<ContentProps> {
  render(): React.ReactNode {
    const { language } = this.props;

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
  <LanguageProvider>
    <I10NContent/>
  </LanguageProvider>
);

export default Context;