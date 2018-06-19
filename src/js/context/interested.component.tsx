import * as React from 'react';
import UpdateSensitiveComponent, { Colorable } from './updateSensitive.component';
import { Segment } from 'semantic-ui-react';

interface InterestedComponentProps {
  language: string;
}

interface InterestedComponentState extends Colorable {
}

class InterestedComponent extends UpdateSensitiveComponent<InterestedComponentProps, InterestedComponentState> {

  render(): React.ReactNode {
    const { language } = this.props;

    return (
      <Segment color={this.state.color}>
        <p>This component does care about Context and re-renders anytime Context is changed</p>

        {language === 'en' && (
          <strong>Content in English</strong>
        )}
        {language === 'es' && (
          <strong>Contenido en Español</strong>
        )}
      </Segment>
    );
  }
}

export default InterestedComponent;