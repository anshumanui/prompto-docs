import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("Minus");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>Minus expressions</h2>

            <p>Minus expressions are expressions used to reverse a value.<br/>
                A minus expression is a code fragment which produces a value, whose type is determined by the value
                being reversed, and which can then be used as an input for other operations: print, write, method call
                and so forth.<br/>
                The returned type is always the same as the expression itself.
            </p>
            <p>Minus expressions should not be confused with Subtract expressions, which use the same
                operator <code>-</code>.<br/>
            </p>
            <h3>
                Reversing Integer and Decimal values
            </h3>
            <PromptoPlayer lines={8} sampleUrl="samples/expressions/minus-number.pec" runnable={true}/>
            <br/>

            <h3>
                Reversing Period values
            </h3>
            <PromptoPlayer lines={8} sampleUrl="samples/expressions/minus-period.pec" runnable={true}/>
            <br/>

            </React.Fragment>;
    }

}

export default new ThisTopic();