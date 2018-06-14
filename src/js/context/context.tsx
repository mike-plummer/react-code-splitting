import * as React from 'react';

interface ContentProps {
  language: string;
}
interface LanguageState {
  language: string;
}

const LanguageContext = React.createContext('en');

class LanguageProvider extends React.Component<{}, LanguageState> {
  readonly state: LanguageState = { language: 'en' };

  render(): React.ReactNode {
    return (
      <LanguageContext.Provider value={this.state.language}>
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
      <div>
        {language === 'en' && (
          <p>Content in English</p>
        )}
        {language === 'es' && (
          <p>Contenido en Español</p>
        )}
      </div>
    );
  }
}

const Context: React.SFC<{}> = () => (
  <LanguageProvider>
    <I10NContent/>
  </LanguageProvider>
);

export default Context;