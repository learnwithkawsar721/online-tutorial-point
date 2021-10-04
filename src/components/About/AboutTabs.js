import React from "react";
import { Tab, Tabs } from "react-bootstrap";
const AboutTabs = () => {
  return (
    <Tabs
      defaultActiveKey="mission"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="mission" title="Our Mission">
        <p>
          That thou art blam'd shall not be thy defect, For slander's mark was
          ever yet the fair; The ornament of beauty is suspect, A crow that
          flies in heaven's sweetest air. So thou be good, slander doth but
          approve Thy worth the greater being woo'd of time; For canker vice the
          sweetest buds doth love, And thou present'st a pure unstained prime.
          Thou hast passed by the ambush of young days Either not assail'd, or
          victor being charg'd;
        </p>
      </Tab>
      <Tab eventKey="vision" title="Our Vision">
        <p>
          Or I shall live your epitaph to make, Or you survive when I in earth
          am rotten; From hence your memory death cannot take, Although in me
          each part will be forgotten. Your name from hence immortal life shall
          have, Though I, once gone, to all the world must die: The earth can
          yield me but a common grave, When you entombed in men's eyes shall
          lie. Your monument shall be my gentle verse, Which eyes not yet
          created shall o'er-read;
        </p>
      </Tab>
      <Tab eventKey="value" title="Our Values">
        <p>
          we believe everyone should have the opportunity to create progress
          through technology and develop the skills of tomorrow
        </p>
      </Tab>
    </Tabs>
  );
};

export default AboutTabs;
