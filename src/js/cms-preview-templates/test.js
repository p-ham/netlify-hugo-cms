import React from "react";

const TestEntry = ({heading, text}) =>
  <div>
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <p>{ text }</p>
  </div>;

const TestEntries = ({data}) => data && data.length > 0
    ? <div className="flex-ns mb3">
      {data.map(({heading, text}) => <TestEntry heading={heading} text={text} />)}
    </div>
    : "";

export default class TestPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryTestEntries = entry.getIn(["data", "test_entries"]);
    const testEntries = entryTestEntries ? entryTestEntries.toJS() : [];
    return <div className="ph3 bg-off-white">
      <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" className="db w4 center pv4" />
      <div className="center mw6 pv3">
        { widgetFor("body") }
        <TestEntries data={testEntries} />
      </div>
    </div>;
  }
}
