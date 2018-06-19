import * as React from 'react';
import UpdateSensitiveComponent, { Colorable } from './updateSensitive.component';
import { Segment } from 'semantic-ui-react';
import InterestedComponent from './interested.component';
import { LanguageContext } from './context';

interface UninterestedComponentProps {
}

interface UninterestedComponentState extends Colorable {
}

class UninterestedComponent extends UpdateSensitiveComponent<UninterestedComponentProps, UninterestedComponentState> {

  render(): React.ReactNode {
    return (
      <Segment color={this.state.color}>
        <p>
          This component doesn't care about Context, so it won't re-render on a Context change even though it's a
          child
        </p>
        <LanguageContext.Consumer>
          {language => (
            <InterestedComponent language={language}/>
          )}
        </LanguageContext.Consumer>
      </Segment>
    );
  }
}

export default UninterestedComponent;