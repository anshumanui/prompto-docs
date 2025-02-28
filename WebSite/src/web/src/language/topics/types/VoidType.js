import React from 'react';
import Topic from "../../../components/Topic";

class ThisTopic extends Topic {

    constructor() {
        super("Void");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Void</h2>

            <p>The <code>Void</code> type is a special technical type to represent the absence of type.<br/>
                This type is useful internally for describing the return type of methods which do not return any value.<br/>
            </p>
            </React.Fragment>;
    }

}

export default new ThisTopic();