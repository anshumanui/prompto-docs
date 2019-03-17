import React from 'react';
import Topic from "../Topic";
import PromptoPlayer from "../../../prompto-player/PromptoPlayer";

class ThisTopic extends Topic {

    constructor() {
        super("If else");
    }

    renderContent(topicSelected) {
        return <React.Fragment>
            <h2>If else statement</h2>

            <p>An if else statement is a way to change the flow of execution based on conditions.<br/>
                The simplest if statement has the form <code>if <i>condition</i> <i>statements</i></code>
                where <code><i>condition</i></code> is a boolean expression, and <code><i>statements</i></code>
                is a list of statements which will be executed whenever <code><i>condition</i></code> is true.
            </p>
            <PromptoPlayer sampleUrl="samples/statements/if.pec" runnable={true}/>
            <br/>

            <p>Optionally, an if else statement can comprise an <code>else</code> list of statements,
                which which will be executed whenever <code><i>condition</i></code> is true.
            </p>
            <PromptoPlayer sampleUrl="samples/statements/if-else.pec" runnable={true}/>
            <br/>


            <p>Additionally, an if else statement can comprise many <code>else if <i>condition</i></code> list of
                statements,
                which which will be executed whenever <code><i>condition</i></code> is true.
            </p>
            <PromptoPlayer lines={10} sampleUrl="samples/statements/if-else-if.pec" runnable={true}/>
            </React.Fragment>;
    }

}

export default new ThisTopic();