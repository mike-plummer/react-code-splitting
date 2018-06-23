import * as React from 'react';
import { Segment } from "semantic-ui-react";

interface CodeSplittingProps {}

class CodeSplitting extends React.Component<CodeSplittingProps> {

  render(): React.ReactNode {
    return (
      <Segment>
        <p>
          Each tab of this example application is asynchronously loaded on-demand by Webpack. This is accomplished by
          using <strong>dynamic imports</strong>. The 'react-loadable' library layers on top of this to give us nice
          behaviors to display content while waiting for the bundle to load as well as handling errors if it fails to
          load.
        </p>
        <p>
          To verify this is actually happening use your browser's dev tools. Refresh the application then navigate to
          each tab in turn. You should notice that there is a network request made for a JS file that matches the name
          of the tab made as you navigate to that tab.
        </p>
        <p>
          Doing this means that users only load the logic they need as they need it. This reduces the amount of data it
          takes to initially load your site (thus making it load faster, especially on mobile), and helps reduce overall
          bandwidth use (which is good for you and your users)
        </p>
      </Segment>
    );
  }
}

export default CodeSplitting;
